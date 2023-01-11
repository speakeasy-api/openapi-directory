package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeveloperMetadataRequest
 * A request to create developer metadata.
**/
public class CreateDeveloperMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata developerMetadata;
    public CreateDeveloperMetadataRequest withDeveloperMetadata(DeveloperMetadata developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
}