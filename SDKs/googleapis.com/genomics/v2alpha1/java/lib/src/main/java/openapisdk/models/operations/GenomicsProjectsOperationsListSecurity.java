package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsProjectsOperationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public GenomicsProjectsOperationsListSecurityOption1 option1;
    public GenomicsProjectsOperationsListSecurity withOption1(GenomicsProjectsOperationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public GenomicsProjectsOperationsListSecurityOption2 option2;
    public GenomicsProjectsOperationsListSecurity withOption2(GenomicsProjectsOperationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}