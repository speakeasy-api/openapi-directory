package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChildrenDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveChildrenDeleteSecurityOption1 option1;
    public DriveChildrenDeleteSecurity withOption1(DriveChildrenDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveChildrenDeleteSecurityOption2 option2;
    public DriveChildrenDeleteSecurity withOption2(DriveChildrenDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}