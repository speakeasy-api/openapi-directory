package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts {
    @JsonProperty("portId")
    public String portId;
    public UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts withPortId(String portId) {
        this.portId = portId;
        return this;
    }
    @JsonProperty("profile")
    public String profile;
    public UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts withProfile(String profile) {
        this.profile = profile;
        return this;
    }
}