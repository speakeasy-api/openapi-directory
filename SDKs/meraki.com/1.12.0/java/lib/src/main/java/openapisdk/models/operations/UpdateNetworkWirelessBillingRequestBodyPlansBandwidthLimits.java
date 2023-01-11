package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits
 * The uplink bandwidth settings for the pricing plan.
**/
public class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitDown")
    public Long limitDown;
    public UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits withLimitDown(Long limitDown) {
        this.limitDown = limitDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitUp")
    public Long limitUp;
    public UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits withLimitUp(Long limitUp) {
        this.limitUp = limitUp;
        return this;
    }
}