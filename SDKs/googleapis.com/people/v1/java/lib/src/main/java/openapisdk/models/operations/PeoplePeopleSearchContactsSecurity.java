package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleSearchContactsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PeoplePeopleSearchContactsSecurityOption1 option1;
    public PeoplePeopleSearchContactsSecurity withOption1(PeoplePeopleSearchContactsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PeoplePeopleSearchContactsSecurityOption2 option2;
    public PeoplePeopleSearchContactsSecurity withOption2(PeoplePeopleSearchContactsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}