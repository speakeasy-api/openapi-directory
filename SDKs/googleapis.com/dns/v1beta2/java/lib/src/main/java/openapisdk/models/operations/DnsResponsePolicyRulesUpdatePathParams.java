package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePolicyRulesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsResponsePolicyRulesUpdatePathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=responsePolicy")
    public String responsePolicy;
    public DnsResponsePolicyRulesUpdatePathParams withResponsePolicy(String responsePolicy) {
        this.responsePolicy = responsePolicy;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=responsePolicyRule")
    public String responsePolicyRule;
    public DnsResponsePolicyRulesUpdatePathParams withResponsePolicyRule(String responsePolicyRule) {
        this.responsePolicyRule = responsePolicyRule;
        return this;
    }
}