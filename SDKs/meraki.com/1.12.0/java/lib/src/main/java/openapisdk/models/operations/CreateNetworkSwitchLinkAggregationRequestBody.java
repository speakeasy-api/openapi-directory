package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkSwitchLinkAggregationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchPorts")
    public CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[] switchPorts;
    public CreateNetworkSwitchLinkAggregationRequestBody withSwitchPorts(CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[] switchPorts) {
        this.switchPorts = switchPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchProfilePorts")
    public CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[] switchProfilePorts;
    public CreateNetworkSwitchLinkAggregationRequestBody withSwitchProfilePorts(CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[] switchProfilePorts) {
        this.switchProfilePorts = switchProfilePorts;
        return this;
    }
}