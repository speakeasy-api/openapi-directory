package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateDownloadUrlResponse
 * Response of `GenerateDownloadUrl` method.
**/
public class GenerateDownloadUrlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUrl")
    public String downloadUrl;
    public GenerateDownloadUrlResponse withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
}