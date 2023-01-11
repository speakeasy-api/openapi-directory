package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FormsFormsCreateSecurityOption1 option1;
    public FormsFormsCreateSecurity withOption1(FormsFormsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FormsFormsCreateSecurityOption2 option2;
    public FormsFormsCreateSecurity withOption2(FormsFormsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FormsFormsCreateSecurityOption3 option3;
    public FormsFormsCreateSecurity withOption3(FormsFormsCreateSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}