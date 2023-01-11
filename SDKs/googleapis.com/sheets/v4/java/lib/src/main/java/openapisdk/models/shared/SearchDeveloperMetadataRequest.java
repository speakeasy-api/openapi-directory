package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchDeveloperMetadataRequest
 * A request to retrieve all developer metadata matching the set of specified criteria.
**/
public class SearchDeveloperMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilters")
    public DataFilter[] dataFilters;
    public SearchDeveloperMetadataRequest withDataFilters(DataFilter[] dataFilters) {
        this.dataFilters = dataFilters;
        return this;
    }
}