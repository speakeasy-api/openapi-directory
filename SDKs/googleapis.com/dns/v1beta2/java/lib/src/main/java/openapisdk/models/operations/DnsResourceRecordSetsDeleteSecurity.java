package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResourceRecordSetsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsResourceRecordSetsDeleteSecurityOption1 option1;
    public DnsResourceRecordSetsDeleteSecurity withOption1(DnsResourceRecordSetsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsResourceRecordSetsDeleteSecurityOption2 option2;
    public DnsResourceRecordSetsDeleteSecurity withOption2(DnsResourceRecordSetsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}