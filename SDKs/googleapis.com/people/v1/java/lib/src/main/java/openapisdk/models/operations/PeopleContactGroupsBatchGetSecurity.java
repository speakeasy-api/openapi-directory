package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsBatchGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PeopleContactGroupsBatchGetSecurityOption1 option1;
    public PeopleContactGroupsBatchGetSecurity withOption1(PeopleContactGroupsBatchGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PeopleContactGroupsBatchGetSecurityOption2 option2;
    public PeopleContactGroupsBatchGetSecurity withOption2(PeopleContactGroupsBatchGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}