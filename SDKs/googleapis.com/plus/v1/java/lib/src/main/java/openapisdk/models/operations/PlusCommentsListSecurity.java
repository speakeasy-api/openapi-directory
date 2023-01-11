package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusCommentsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PlusCommentsListSecurityOption1 option1;
    public PlusCommentsListSecurity withOption1(PlusCommentsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PlusCommentsListSecurityOption2 option2;
    public PlusCommentsListSecurity withOption2(PlusCommentsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}