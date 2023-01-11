package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetIosReopenAttributionRequest
 * Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
public class GetIosReopenAttributionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public GetIosReopenAttributionRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedLink")
    public String requestedLink;
    public GetIosReopenAttributionRequest withRequestedLink(String requestedLink) {
        this.requestedLink = requestedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdkVersion")
    public String sdkVersion;
    public GetIosReopenAttributionRequest withSDKVersion(String sdkVersion) {
        this.sdkVersion = sdkVersion;
        return this;
    }
}