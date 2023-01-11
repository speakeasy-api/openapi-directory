package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePolicyRulesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsResponsePolicyRulesGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=responsePolicy")
    public String responsePolicy;
    public DnsResponsePolicyRulesGetPathParams withResponsePolicy(String responsePolicy) {
        this.responsePolicy = responsePolicy;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=responsePolicyRule")
    public String responsePolicyRule;
    public DnsResponsePolicyRulesGetPathParams withResponsePolicyRule(String responsePolicyRule) {
        this.responsePolicyRule = responsePolicyRule;
        return this;
    }
}