package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunMobileFriendlyTestRequest
 * Mobile-friendly test request.
**/
public class RunMobileFriendlyTestRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestScreenshot")
    public Boolean requestScreenshot;
    public RunMobileFriendlyTestRequest withRequestScreenshot(Boolean requestScreenshot) {
        this.requestScreenshot = requestScreenshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public RunMobileFriendlyTestRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}