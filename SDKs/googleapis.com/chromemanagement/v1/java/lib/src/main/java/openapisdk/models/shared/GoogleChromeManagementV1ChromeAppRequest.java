package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1ChromeAppRequest
 * Details of an app installation request.
**/
public class GoogleChromeManagementV1ChromeAppRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appDetails")
    public String appDetails;
    public GoogleChromeManagementV1ChromeAppRequest withAppDetails(String appDetails) {
        this.appDetails = appDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public GoogleChromeManagementV1ChromeAppRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailUri")
    public String detailUri;
    public GoogleChromeManagementV1ChromeAppRequest withDetailUri(String detailUri) {
        this.detailUri = detailUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleChromeManagementV1ChromeAppRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUri")
    public String iconUri;
    public GoogleChromeManagementV1ChromeAppRequest withIconUri(String iconUri) {
        this.iconUri = iconUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestRequestTime")
    public String latestRequestTime;
    public GoogleChromeManagementV1ChromeAppRequest withLatestRequestTime(String latestRequestTime) {
        this.latestRequestTime = latestRequestTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestCount")
    public String requestCount;
    public GoogleChromeManagementV1ChromeAppRequest withRequestCount(String requestCount) {
        this.requestCount = requestCount;
        return this;
    }
}