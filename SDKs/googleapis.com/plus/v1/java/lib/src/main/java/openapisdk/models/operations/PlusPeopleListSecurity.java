package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusPeopleListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PlusPeopleListSecurityOption1 option1;
    public PlusPeopleListSecurity withOption1(PlusPeopleListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PlusPeopleListSecurityOption2 option2;
    public PlusPeopleListSecurity withOption2(PlusPeopleListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}