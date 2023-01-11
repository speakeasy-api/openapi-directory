package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyBandwidth
 *     The bandwidth settings for clients bound to your group policy.
 * 
**/
public class UpdateNetworkGroupPolicyRequestBodyBandwidth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthLimits")
    public UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits bandwidthLimits;
    public UpdateNetworkGroupPolicyRequestBodyBandwidth withBandwidthLimits(UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits bandwidthLimits) {
        this.bandwidthLimits = bandwidthLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum settings;
    public UpdateNetworkGroupPolicyRequestBodyBandwidth withSettings(UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}