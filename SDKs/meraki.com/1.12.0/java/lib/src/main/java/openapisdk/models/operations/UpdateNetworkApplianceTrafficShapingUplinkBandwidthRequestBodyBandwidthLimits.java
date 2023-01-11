package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits
 * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
**/
public class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellular")
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular cellular;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits withCellular(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular cellular) {
        this.cellular = cellular;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wan1")
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 wan1;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits withWan1(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 wan1) {
        this.wan1 = wan1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wan2")
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 wan2;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits withWan2(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 wan2) {
        this.wan2 = wan2;
        return this;
    }
}