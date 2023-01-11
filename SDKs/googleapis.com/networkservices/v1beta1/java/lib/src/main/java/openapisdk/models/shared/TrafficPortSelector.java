package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficPortSelector
 * Specification of a port-based selector.
**/
public class TrafficPortSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public String[] ports;
    public TrafficPortSelector withPorts(String[] ports) {
        this.ports = ports;
        return this;
    }
}