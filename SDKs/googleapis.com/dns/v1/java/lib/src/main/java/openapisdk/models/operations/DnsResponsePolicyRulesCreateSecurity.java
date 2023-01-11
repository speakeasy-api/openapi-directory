package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePolicyRulesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePolicyRulesCreateSecurityOption1 option1;
    public DnsResponsePolicyRulesCreateSecurity withOption1(DnsResponsePolicyRulesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePolicyRulesCreateSecurityOption2 option2;
    public DnsResponsePolicyRulesCreateSecurity withOption2(DnsResponsePolicyRulesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}