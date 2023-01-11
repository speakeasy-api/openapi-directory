package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableCircuitTerminationInput {
    @JsonProperty("circuit")
    public Long circuit;
    public WritableCircuitTerminationInput withCircuit(Long circuit) {
        this.circuit = circuit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public Long interface_;
    public WritableCircuitTerminationInput withInterface(Long interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonProperty("port_speed")
    public Long portSpeed;
    public WritableCircuitTerminationInput withPortSpeed(Long portSpeed) {
        this.portSpeed = portSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pp_info")
    public String ppInfo;
    public WritableCircuitTerminationInput withPpInfo(String ppInfo) {
        this.ppInfo = ppInfo;
        return this;
    }
    @JsonProperty("site")
    public Long site;
    public WritableCircuitTerminationInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonProperty("term_side")
    public WritableCircuitTerminationTerminationEnum termSide;
    public WritableCircuitTerminationInput withTermSide(WritableCircuitTerminationTerminationEnum termSide) {
        this.termSide = termSide;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upstream_speed")
    public Long upstreamSpeed;
    public WritableCircuitTerminationInput withUpstreamSpeed(Long upstreamSpeed) {
        this.upstreamSpeed = upstreamSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xconnect_id")
    public String xconnectId;
    public WritableCircuitTerminationInput withXconnectId(String xconnectId) {
        this.xconnectId = xconnectId;
        return this;
    }
}