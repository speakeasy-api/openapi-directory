package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
 * Response containing counts for devices that need attention.
**/
public class GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noRecentPolicySyncCount")
    public String noRecentPolicySyncCount;
    public GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse withNoRecentPolicySyncCount(String noRecentPolicySyncCount) {
        this.noRecentPolicySyncCount = noRecentPolicySyncCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noRecentUserActivityCount")
    public String noRecentUserActivityCount;
    public GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse withNoRecentUserActivityCount(String noRecentUserActivityCount) {
        this.noRecentUserActivityCount = noRecentUserActivityCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersionNotCompliantCount")
    public String osVersionNotCompliantCount;
    public GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse withOsVersionNotCompliantCount(String osVersionNotCompliantCount) {
        this.osVersionNotCompliantCount = osVersionNotCompliantCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingUpdate")
    public String pendingUpdate;
    public GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse withPendingUpdate(String pendingUpdate) {
        this.pendingUpdate = pendingUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsupportedPolicyCount")
    public String unsupportedPolicyCount;
    public GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse withUnsupportedPolicyCount(String unsupportedPolicyCount) {
        this.unsupportedPolicyCount = unsupportedPolicyCount;
        return this;
    }
}