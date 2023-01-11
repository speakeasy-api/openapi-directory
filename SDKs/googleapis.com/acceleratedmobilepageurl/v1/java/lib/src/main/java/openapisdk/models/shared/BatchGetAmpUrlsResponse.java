package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetAmpUrlsResponse
 * Batch AMP URL response.
**/
public class BatchGetAmpUrlsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ampUrls")
    public AmpUrl[] ampUrls;
    public BatchGetAmpUrlsResponse withAmpUrls(AmpUrl[] ampUrls) {
        this.ampUrls = ampUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlErrors")
    public AmpUrlError[] urlErrors;
    public BatchGetAmpUrlsResponse withUrlErrors(AmpUrlError[] urlErrors) {
        this.urlErrors = urlErrors;
        return this;
    }
}