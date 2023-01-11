package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusPeopleListByActivitySecurity {
    @SpeakeasyMetadata("security:option=true")
    public PlusPeopleListByActivitySecurityOption1 option1;
    public PlusPeopleListByActivitySecurity withOption1(PlusPeopleListByActivitySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PlusPeopleListByActivitySecurityOption2 option2;
    public PlusPeopleListByActivitySecurity withOption2(PlusPeopleListByActivitySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}