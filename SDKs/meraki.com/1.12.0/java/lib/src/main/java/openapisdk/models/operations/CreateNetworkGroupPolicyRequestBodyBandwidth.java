package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyBandwidth
 *     The bandwidth settings for clients bound to your group policy.
 * 
**/
public class CreateNetworkGroupPolicyRequestBodyBandwidth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthLimits")
    public CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits bandwidthLimits;
    public CreateNetworkGroupPolicyRequestBodyBandwidth withBandwidthLimits(CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits bandwidthLimits) {
        this.bandwidthLimits = bandwidthLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum settings;
    public CreateNetworkGroupPolicyRequestBodyBandwidth withSettings(CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}