package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDeveloperMetadataResponse
 * The response from deleting developer metadata.
**/
public class DeleteDeveloperMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedDeveloperMetadata")
    public DeveloperMetadata[] deletedDeveloperMetadata;
    public DeleteDeveloperMetadataResponse withDeletedDeveloperMetadata(DeveloperMetadata[] deletedDeveloperMetadata) {
        this.deletedDeveloperMetadata = deletedDeveloperMetadata;
        return this;
    }
}