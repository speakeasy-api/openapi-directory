package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveTeamdrivesListSecurityOption1 option1;
    public DriveTeamdrivesListSecurity withOption1(DriveTeamdrivesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveTeamdrivesListSecurityOption2 option2;
    public DriveTeamdrivesListSecurity withOption2(DriveTeamdrivesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}