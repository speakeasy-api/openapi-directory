package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PeopleContactGroupsListSecurityOption1 option1;
    public PeopleContactGroupsListSecurity withOption1(PeopleContactGroupsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PeopleContactGroupsListSecurityOption2 option2;
    public PeopleContactGroupsListSecurity withOption2(PeopleContactGroupsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}