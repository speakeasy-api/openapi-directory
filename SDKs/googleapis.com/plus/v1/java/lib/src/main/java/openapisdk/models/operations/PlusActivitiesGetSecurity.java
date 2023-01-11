package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusActivitiesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PlusActivitiesGetSecurityOption1 option1;
    public PlusActivitiesGetSecurity withOption1(PlusActivitiesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PlusActivitiesGetSecurityOption2 option2;
    public PlusActivitiesGetSecurity withOption2(PlusActivitiesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}