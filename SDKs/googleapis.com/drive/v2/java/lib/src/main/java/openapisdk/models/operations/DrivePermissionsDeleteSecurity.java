package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsDeleteSecurityOption1 option1;
    public DrivePermissionsDeleteSecurity withOption1(DrivePermissionsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsDeleteSecurityOption2 option2;
    public DrivePermissionsDeleteSecurity withOption2(DrivePermissionsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}