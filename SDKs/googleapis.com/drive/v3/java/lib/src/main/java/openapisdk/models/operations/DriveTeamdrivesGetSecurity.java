package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveTeamdrivesGetSecurityOption1 option1;
    public DriveTeamdrivesGetSecurity withOption1(DriveTeamdrivesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveTeamdrivesGetSecurityOption2 option2;
    public DriveTeamdrivesGetSecurity withOption2(DriveTeamdrivesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}