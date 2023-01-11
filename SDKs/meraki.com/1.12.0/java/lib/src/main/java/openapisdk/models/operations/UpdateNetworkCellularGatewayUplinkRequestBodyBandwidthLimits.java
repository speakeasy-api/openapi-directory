package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits
 * The bandwidth settings for the 'cellular' uplink
**/
public class UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitDown")
    public Long limitDown;
    public UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits withLimitDown(Long limitDown) {
        this.limitDown = limitDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitUp")
    public Long limitUp;
    public UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits withLimitUp(Long limitUp) {
        this.limitUp = limitUp;
        return this;
    }
}