package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusActivitiesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PlusActivitiesListSecurityOption1 option1;
    public PlusActivitiesListSecurity withOption1(PlusActivitiesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PlusActivitiesListSecurityOption2 option2;
    public PlusActivitiesListSecurity withOption2(PlusActivitiesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}