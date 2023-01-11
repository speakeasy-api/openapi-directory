package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchAccessControlListsRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("dstCidr")
    public String dstCidr;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withDstCidr(String dstCidr) {
        this.dstCidr = dstCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstPort")
    public String dstPort;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withDstPort(String dstPort) {
        this.dstPort = dstPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipVersion")
    public UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum ipVersion;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withIpVersion(UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum ipVersion) {
        this.ipVersion = ipVersion;
        return this;
    }
    @JsonProperty("policy")
    public UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum policy;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withPolicy(UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum protocol;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withProtocol(UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("srcCidr")
    public String srcCidr;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withSrcCidr(String srcCidr) {
        this.srcCidr = srcCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public String srcPort;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withSrcPort(String srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public String vlan;
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules withVlan(String vlan) {
        this.vlan = vlan;
        return this;
    }
}