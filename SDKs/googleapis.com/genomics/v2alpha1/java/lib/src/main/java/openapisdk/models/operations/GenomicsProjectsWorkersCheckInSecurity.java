package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsProjectsWorkersCheckInSecurity {
    @SpeakeasyMetadata("security:option=true")
    public GenomicsProjectsWorkersCheckInSecurityOption1 option1;
    public GenomicsProjectsWorkersCheckInSecurity withOption1(GenomicsProjectsWorkersCheckInSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public GenomicsProjectsWorkersCheckInSecurityOption2 option2;
    public GenomicsProjectsWorkersCheckInSecurity withOption2(GenomicsProjectsWorkersCheckInSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}