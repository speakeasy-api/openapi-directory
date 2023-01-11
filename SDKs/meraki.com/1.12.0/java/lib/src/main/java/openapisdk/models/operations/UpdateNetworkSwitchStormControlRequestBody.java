package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchStormControlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("broadcastThreshold")
    public Long broadcastThreshold;
    public UpdateNetworkSwitchStormControlRequestBody withBroadcastThreshold(Long broadcastThreshold) {
        this.broadcastThreshold = broadcastThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multicastThreshold")
    public Long multicastThreshold;
    public UpdateNetworkSwitchStormControlRequestBody withMulticastThreshold(Long multicastThreshold) {
        this.multicastThreshold = multicastThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unknownUnicastThreshold")
    public Long unknownUnicastThreshold;
    public UpdateNetworkSwitchStormControlRequestBody withUnknownUnicastThreshold(Long unknownUnicastThreshold) {
        this.unknownUnicastThreshold = unknownUnicastThreshold;
        return this;
    }
}