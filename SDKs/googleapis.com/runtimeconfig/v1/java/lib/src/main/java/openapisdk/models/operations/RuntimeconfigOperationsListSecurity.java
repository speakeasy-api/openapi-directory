package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigOperationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public RuntimeconfigOperationsListSecurityOption1 option1;
    public RuntimeconfigOperationsListSecurity withOption1(RuntimeconfigOperationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public RuntimeconfigOperationsListSecurityOption2 option2;
    public RuntimeconfigOperationsListSecurity withOption2(RuntimeconfigOperationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}