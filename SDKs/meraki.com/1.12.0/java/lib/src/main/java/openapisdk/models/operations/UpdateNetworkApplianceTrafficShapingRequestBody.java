package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceTrafficShapingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalBandwidthLimits")
    public UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits globalBandwidthLimits;
    public UpdateNetworkApplianceTrafficShapingRequestBody withGlobalBandwidthLimits(UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits globalBandwidthLimits) {
        this.globalBandwidthLimits = globalBandwidthLimits;
        return this;
    }
}