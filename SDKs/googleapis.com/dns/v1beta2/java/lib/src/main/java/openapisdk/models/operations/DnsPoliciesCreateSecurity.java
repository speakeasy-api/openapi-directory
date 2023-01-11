package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsPoliciesCreateSecurityOption1 option1;
    public DnsPoliciesCreateSecurity withOption1(DnsPoliciesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsPoliciesCreateSecurityOption2 option2;
    public DnsPoliciesCreateSecurity withOption2(DnsPoliciesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}