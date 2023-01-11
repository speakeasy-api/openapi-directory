package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsProjectsOperationsCancelSecurity {
    @SpeakeasyMetadata("security:option=true")
    public GenomicsProjectsOperationsCancelSecurityOption1 option1;
    public GenomicsProjectsOperationsCancelSecurity withOption1(GenomicsProjectsOperationsCancelSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public GenomicsProjectsOperationsCancelSecurityOption2 option2;
    public GenomicsProjectsOperationsCancelSecurity withOption2(GenomicsProjectsOperationsCancelSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}