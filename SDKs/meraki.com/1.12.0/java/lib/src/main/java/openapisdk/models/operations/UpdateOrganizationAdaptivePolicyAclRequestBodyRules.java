package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationAdaptivePolicyAclRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstPort")
    public String dstPort;
    public UpdateOrganizationAdaptivePolicyAclRequestBodyRules withDstPort(String dstPort) {
        this.dstPort = dstPort;
        return this;
    }
    @JsonProperty("policy")
    public UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum policy;
    public UpdateOrganizationAdaptivePolicyAclRequestBodyRules withPolicy(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum protocol;
    public UpdateOrganizationAdaptivePolicyAclRequestBodyRules withProtocol(UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public String srcPort;
    public UpdateOrganizationAdaptivePolicyAclRequestBodyRules withSrcPort(String srcPort) {
        this.srcPort = srcPort;
        return this;
    }
}