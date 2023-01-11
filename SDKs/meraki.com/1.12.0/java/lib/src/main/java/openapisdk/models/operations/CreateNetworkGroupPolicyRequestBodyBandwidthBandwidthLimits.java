package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
public class CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitDown")
    public Long limitDown;
    public CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits withLimitDown(Long limitDown) {
        this.limitDown = limitDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitUp")
    public Long limitUp;
    public CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits withLimitUp(Long limitUp) {
        this.limitUp = limitUp;
        return this;
    }
}