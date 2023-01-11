package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsUpdateSecurityOption1 option1;
    public DrivePermissionsUpdateSecurity withOption1(DrivePermissionsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsUpdateSecurityOption2 option2;
    public DrivePermissionsUpdateSecurity withOption2(DrivePermissionsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}