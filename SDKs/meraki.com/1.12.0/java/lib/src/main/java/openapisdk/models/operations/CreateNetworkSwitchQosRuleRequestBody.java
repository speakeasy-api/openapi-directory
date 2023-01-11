package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkSwitchQosRuleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp")
    public Long dscp;
    public CreateNetworkSwitchQosRuleRequestBody withDscp(Long dscp) {
        this.dscp = dscp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstPort")
    public Long dstPort;
    public CreateNetworkSwitchQosRuleRequestBody withDstPort(Long dstPort) {
        this.dstPort = dstPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstPortRange")
    public String dstPortRange;
    public CreateNetworkSwitchQosRuleRequestBody withDstPortRange(String dstPortRange) {
        this.dstPortRange = dstPortRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public CreateNetworkSwitchQosRuleRequestBodyProtocolEnum protocol;
    public CreateNetworkSwitchQosRuleRequestBody withProtocol(CreateNetworkSwitchQosRuleRequestBodyProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public Long srcPort;
    public CreateNetworkSwitchQosRuleRequestBody withSrcPort(Long srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPortRange")
    public String srcPortRange;
    public CreateNetworkSwitchQosRuleRequestBody withSrcPortRange(String srcPortRange) {
        this.srcPortRange = srcPortRange;
        return this;
    }
    @JsonProperty("vlan")
    public Long vlan;
    public CreateNetworkSwitchQosRuleRequestBody withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}