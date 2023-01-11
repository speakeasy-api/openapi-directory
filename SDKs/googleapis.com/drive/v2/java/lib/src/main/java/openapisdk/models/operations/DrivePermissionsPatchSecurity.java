package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsPatchSecurityOption1 option1;
    public DrivePermissionsPatchSecurity withOption1(DrivePermissionsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DrivePermissionsPatchSecurityOption2 option2;
    public DrivePermissionsPatchSecurity withOption2(DrivePermissionsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}