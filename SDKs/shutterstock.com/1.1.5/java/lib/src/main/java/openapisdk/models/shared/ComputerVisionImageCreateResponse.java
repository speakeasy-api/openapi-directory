package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ComputerVisionImageCreateResponse
 * Asset upload information
**/
public class ComputerVisionImageCreateResponse {
    @JsonProperty("upload_id")
    public String uploadId;
    public ComputerVisionImageCreateResponse withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}