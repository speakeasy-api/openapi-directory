package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResourceRecordSetsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResourceRecordSetsCreateSecurityOption1 option1;
    public DnsResourceRecordSetsCreateSecurity withOption1(DnsResourceRecordSetsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResourceRecordSetsCreateSecurityOption2 option2;
    public DnsResourceRecordSetsCreateSecurity withOption2(DnsResourceRecordSetsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}