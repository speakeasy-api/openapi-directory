package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthLimits")
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits bandwidthLimits;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody withBandwidthLimits(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits bandwidthLimits) {
        this.bandwidthLimits = bandwidthLimits;
        return this;
    }
}