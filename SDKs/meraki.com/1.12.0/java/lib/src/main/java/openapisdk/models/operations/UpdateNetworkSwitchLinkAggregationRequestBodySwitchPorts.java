package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts {
    @JsonProperty("portId")
    public String portId;
    public UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts withPortId(String portId) {
        this.portId = portId;
        return this;
    }
    @JsonProperty("serial")
    public String serial;
    public UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}