package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleConnectionsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PeoplePeopleConnectionsListSecurityOption1 option1;
    public PeoplePeopleConnectionsListSecurity withOption1(PeoplePeopleConnectionsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PeoplePeopleConnectionsListSecurityOption2 option2;
    public PeoplePeopleConnectionsListSecurity withOption2(PeoplePeopleConnectionsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}