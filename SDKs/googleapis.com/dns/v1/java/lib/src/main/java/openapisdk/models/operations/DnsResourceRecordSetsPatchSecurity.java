package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResourceRecordSetsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResourceRecordSetsPatchSecurityOption1 option1;
    public DnsResourceRecordSetsPatchSecurity withOption1(DnsResourceRecordSetsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResourceRecordSetsPatchSecurityOption2 option2;
    public DnsResourceRecordSetsPatchSecurity withOption2(DnsResourceRecordSetsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}