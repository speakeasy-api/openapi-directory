package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePolicyRulesPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePolicyRulesPatchSecurityOption1 option1;
    public DnsResponsePolicyRulesPatchSecurity withOption1(DnsResponsePolicyRulesPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePolicyRulesPatchSecurityOption2 option2;
    public DnsResponsePolicyRulesPatchSecurity withOption2(DnsResponsePolicyRulesPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}