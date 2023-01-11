package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsPoliciesUpdateSecurityOption1 option1;
    public DnsPoliciesUpdateSecurity withOption1(DnsPoliciesUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsPoliciesUpdateSecurityOption2 option2;
    public DnsPoliciesUpdateSecurity withOption2(DnsPoliciesUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}