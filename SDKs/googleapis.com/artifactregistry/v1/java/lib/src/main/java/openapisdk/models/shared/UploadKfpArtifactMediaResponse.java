package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UploadKfpArtifactMediaResponse
 * The response to upload an artifact.
**/
public class UploadKfpArtifactMediaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public UploadKfpArtifactMediaResponse withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
}