package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetIosPostInstallAttributionRequest
 * Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
**/
public class GetIosPostInstallAttributionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appInstallationTime")
    public String appInstallationTime;
    public GetIosPostInstallAttributionRequest withAppInstallationTime(String appInstallationTime) {
        this.appInstallationTime = appInstallationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public GetIosPostInstallAttributionRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public DeviceInfo device;
    public GetIosPostInstallAttributionRequest withDevice(DeviceInfo device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosVersion")
    public String iosVersion;
    public GetIosPostInstallAttributionRequest withIosVersion(String iosVersion) {
        this.iosVersion = iosVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retrievalMethod")
    public GetIosPostInstallAttributionRequestRetrievalMethodEnum retrievalMethod;
    public GetIosPostInstallAttributionRequest withRetrievalMethod(GetIosPostInstallAttributionRequestRetrievalMethodEnum retrievalMethod) {
        this.retrievalMethod = retrievalMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdkVersion")
    public String sdkVersion;
    public GetIosPostInstallAttributionRequest withSDKVersion(String sdkVersion) {
        this.sdkVersion = sdkVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueMatchLinkToCheck")
    public String uniqueMatchLinkToCheck;
    public GetIosPostInstallAttributionRequest withUniqueMatchLinkToCheck(String uniqueMatchLinkToCheck) {
        this.uniqueMatchLinkToCheck = uniqueMatchLinkToCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visualStyle")
    public GetIosPostInstallAttributionRequestVisualStyleEnum visualStyle;
    public GetIosPostInstallAttributionRequest withVisualStyle(GetIosPostInstallAttributionRequestVisualStyleEnum visualStyle) {
        this.visualStyle = visualStyle;
        return this;
    }
}