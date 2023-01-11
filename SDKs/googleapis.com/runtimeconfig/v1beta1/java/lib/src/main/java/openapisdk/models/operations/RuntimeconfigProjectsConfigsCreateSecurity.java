package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public RuntimeconfigProjectsConfigsCreateSecurityOption1 option1;
    public RuntimeconfigProjectsConfigsCreateSecurity withOption1(RuntimeconfigProjectsConfigsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public RuntimeconfigProjectsConfigsCreateSecurityOption2 option2;
    public RuntimeconfigProjectsConfigsCreateSecurity withOption2(RuntimeconfigProjectsConfigsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}