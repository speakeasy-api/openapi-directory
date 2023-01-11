package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CycleDeviceSwitchPortsRequestBody {
    @JsonProperty("ports")
    public String[] ports;
    public CycleDeviceSwitchPortsRequestBody withPorts(String[] ports) {
        this.ports = ports;
        return this;
    }
}