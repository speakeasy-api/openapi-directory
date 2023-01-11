package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusPeopleSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PlusPeopleSearchSecurityOption1 option1;
    public PlusPeopleSearchSecurity withOption1(PlusPeopleSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PlusPeopleSearchSecurityOption2 option2;
    public PlusPeopleSearchSecurity withOption2(PlusPeopleSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}