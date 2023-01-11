package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDeveloperMetadataRequest
 * A request to delete developer metadata.
**/
public class DeleteDeveloperMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilter")
    public DataFilter dataFilter;
    public DeleteDeveloperMetadataRequest withDataFilter(DataFilter dataFilter) {
        this.dataFilter = dataFilter;
        return this;
    }
}