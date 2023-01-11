package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveDrivesListSecurityOption1 option1;
    public DriveDrivesListSecurity withOption1(DriveDrivesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveDrivesListSecurityOption2 option2;
    public DriveDrivesListSecurity withOption2(DriveDrivesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}