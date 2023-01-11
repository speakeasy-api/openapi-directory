package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveDrivesGetSecurityOption1 option1;
    public DriveDrivesGetSecurity withOption1(DriveDrivesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveDrivesGetSecurityOption2 option2;
    public DriveDrivesGetSecurity withOption2(DriveDrivesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}