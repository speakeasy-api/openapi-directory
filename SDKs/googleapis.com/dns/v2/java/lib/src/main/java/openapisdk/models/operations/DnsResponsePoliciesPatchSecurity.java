package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePoliciesPatchSecurityOption1 option1;
    public DnsResponsePoliciesPatchSecurity withOption1(DnsResponsePoliciesPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResponsePoliciesPatchSecurityOption2 option2;
    public DnsResponsePoliciesPatchSecurity withOption2(DnsResponsePoliciesPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}