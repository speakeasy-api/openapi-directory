package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePoliciesDeleteSecurityOption1 option1;
    public DnsResponsePoliciesDeleteSecurity withOption1(DnsResponsePoliciesDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePoliciesDeleteSecurityOption2 option2;
    public DnsResponsePoliciesDeleteSecurity withOption2(DnsResponsePoliciesDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}