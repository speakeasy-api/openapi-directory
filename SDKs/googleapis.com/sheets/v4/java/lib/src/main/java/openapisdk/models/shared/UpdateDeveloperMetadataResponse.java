package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeveloperMetadataResponse
 * The response from updating developer metadata.
**/
public class UpdateDeveloperMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata[] developerMetadata;
    public UpdateDeveloperMetadataResponse withDeveloperMetadata(DeveloperMetadata[] developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
}