package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UploadAptArtifactMediaResponse
 * The response to upload an artifact.
**/
public class UploadAptArtifactMediaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public UploadAptArtifactMediaResponse withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
}