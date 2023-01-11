package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationAdaptivePolicyAclRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstPort")
    public String dstPort;
    public CreateOrganizationAdaptivePolicyAclRequestBodyRules withDstPort(String dstPort) {
        this.dstPort = dstPort;
        return this;
    }
    @JsonProperty("policy")
    public CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum policy;
    public CreateOrganizationAdaptivePolicyAclRequestBodyRules withPolicy(CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum protocol;
    public CreateOrganizationAdaptivePolicyAclRequestBodyRules withProtocol(CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public String srcPort;
    public CreateOrganizationAdaptivePolicyAclRequestBodyRules withSrcPort(String srcPort) {
        this.srcPort = srcPort;
        return this;
    }
}