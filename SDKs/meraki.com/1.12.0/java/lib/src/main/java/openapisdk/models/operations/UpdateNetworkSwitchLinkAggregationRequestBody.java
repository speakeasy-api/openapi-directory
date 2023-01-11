package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchLinkAggregationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchPorts")
    public UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[] switchPorts;
    public UpdateNetworkSwitchLinkAggregationRequestBody withSwitchPorts(UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[] switchPorts) {
        this.switchPorts = switchPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchProfilePorts")
    public UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[] switchProfilePorts;
    public UpdateNetworkSwitchLinkAggregationRequestBody withSwitchProfilePorts(UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[] switchProfilePorts) {
        this.switchProfilePorts = switchProfilePorts;
        return this;
    }
}