package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsCreateSecurityOption1 option1;
    public DrivePermissionsCreateSecurity withOption1(DrivePermissionsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsCreateSecurityOption2 option2;
    public DrivePermissionsCreateSecurity withOption2(DrivePermissionsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}