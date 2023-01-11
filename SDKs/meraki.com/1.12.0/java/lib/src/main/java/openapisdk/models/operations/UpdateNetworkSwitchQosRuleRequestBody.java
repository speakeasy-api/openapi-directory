package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchQosRuleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp")
    public Long dscp;
    public UpdateNetworkSwitchQosRuleRequestBody withDscp(Long dscp) {
        this.dscp = dscp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstPort")
    public Long dstPort;
    public UpdateNetworkSwitchQosRuleRequestBody withDstPort(Long dstPort) {
        this.dstPort = dstPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstPortRange")
    public String dstPortRange;
    public UpdateNetworkSwitchQosRuleRequestBody withDstPortRange(String dstPortRange) {
        this.dstPortRange = dstPortRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum protocol;
    public UpdateNetworkSwitchQosRuleRequestBody withProtocol(UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public Long srcPort;
    public UpdateNetworkSwitchQosRuleRequestBody withSrcPort(Long srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPortRange")
    public String srcPortRange;
    public UpdateNetworkSwitchQosRuleRequestBody withSrcPortRange(String srcPortRange) {
        this.srcPortRange = srcPortRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public UpdateNetworkSwitchQosRuleRequestBody withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}