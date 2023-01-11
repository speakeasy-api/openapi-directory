package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsPoliciesDeleteSecurityOption1 option1;
    public DnsPoliciesDeleteSecurity withOption1(DnsPoliciesDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsPoliciesDeleteSecurityOption2 option2;
    public DnsPoliciesDeleteSecurity withOption2(DnsPoliciesDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}