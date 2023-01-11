package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkCellularGatewayUplinkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthLimits")
    public UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits bandwidthLimits;
    public UpdateNetworkCellularGatewayUplinkRequestBody withBandwidthLimits(UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits bandwidthLimits) {
        this.bandwidthLimits = bandwidthLimits;
        return this;
    }
}