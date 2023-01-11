package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CircuitCircuitTermination {
    @JsonProperty("connected_endpoint")
    public NestedInterface connectedEndpoint;
    public CircuitCircuitTermination withConnectedEndpoint(NestedInterface connectedEndpoint) {
        this.connectedEndpoint = connectedEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CircuitCircuitTermination withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("port_speed")
    public Long portSpeed;
    public CircuitCircuitTermination withPortSpeed(Long portSpeed) {
        this.portSpeed = portSpeed;
        return this;
    }
    @JsonProperty("site")
    public NestedSite site;
    public CircuitCircuitTermination withSite(NestedSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upstream_speed")
    public Long upstreamSpeed;
    public CircuitCircuitTermination withUpstreamSpeed(Long upstreamSpeed) {
        this.upstreamSpeed = upstreamSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CircuitCircuitTermination withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xconnect_id")
    public String xconnectId;
    public CircuitCircuitTermination withXconnectId(String xconnectId) {
        this.xconnectId = xconnectId;
        return this;
    }
}