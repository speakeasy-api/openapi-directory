package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchedDeveloperMetadata
 * A developer metadata entry and the data filters specified in the original request that matched it.
**/
public class MatchedDeveloperMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilters")
    public DataFilter[] dataFilters;
    public MatchedDeveloperMetadata withDataFilters(DataFilter[] dataFilters) {
        this.dataFilters = dataFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata developerMetadata;
    public MatchedDeveloperMetadata withDeveloperMetadata(DeveloperMetadata developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
}