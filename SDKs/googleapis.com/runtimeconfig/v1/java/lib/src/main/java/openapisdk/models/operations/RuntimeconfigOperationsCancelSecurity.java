package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigOperationsCancelSecurity {
    @SpeakeasyMetadata("security:option=true")
    public RuntimeconfigOperationsCancelSecurityOption1 option1;
    public RuntimeconfigOperationsCancelSecurity withOption1(RuntimeconfigOperationsCancelSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public RuntimeconfigOperationsCancelSecurityOption2 option2;
    public RuntimeconfigOperationsCancelSecurity withOption2(RuntimeconfigOperationsCancelSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}