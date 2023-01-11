package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsWorkersCheckInSecurity {
    @SpeakeasyMetadata("security:option=true")
    public GenomicsWorkersCheckInSecurityOption1 option1;
    public GenomicsWorkersCheckInSecurity withOption1(GenomicsWorkersCheckInSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public GenomicsWorkersCheckInSecurityOption2 option2;
    public GenomicsWorkersCheckInSecurity withOption2(GenomicsWorkersCheckInSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}