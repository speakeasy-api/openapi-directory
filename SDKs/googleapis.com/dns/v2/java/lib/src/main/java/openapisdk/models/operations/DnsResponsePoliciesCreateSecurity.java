package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePoliciesCreateSecurityOption1 option1;
    public DnsResponsePoliciesCreateSecurity withOption1(DnsResponsePoliciesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePoliciesCreateSecurityOption2 option2;
    public DnsResponsePoliciesCreateSecurity withOption2(DnsResponsePoliciesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}