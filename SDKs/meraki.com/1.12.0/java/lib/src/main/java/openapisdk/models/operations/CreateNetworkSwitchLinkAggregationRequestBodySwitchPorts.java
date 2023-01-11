package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts {
    @JsonProperty("portId")
    public String portId;
    public CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts withPortId(String portId) {
        this.portId = portId;
        return this;
    }
    @JsonProperty("serial")
    public String serial;
    public CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}