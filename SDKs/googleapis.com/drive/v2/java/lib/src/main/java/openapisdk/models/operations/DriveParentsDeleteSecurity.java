package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveParentsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveParentsDeleteSecurityOption1 option1;
    public DriveParentsDeleteSecurity withOption1(DriveParentsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveParentsDeleteSecurityOption2 option2;
    public DriveParentsDeleteSecurity withOption2(DriveParentsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}