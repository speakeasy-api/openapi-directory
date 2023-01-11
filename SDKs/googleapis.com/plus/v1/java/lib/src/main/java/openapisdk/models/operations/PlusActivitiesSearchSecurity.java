package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusActivitiesSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PlusActivitiesSearchSecurityOption1 option1;
    public PlusActivitiesSearchSecurity withOption1(PlusActivitiesSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PlusActivitiesSearchSecurityOption2 option2;
    public PlusActivitiesSearchSecurity withOption2(PlusActivitiesSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}