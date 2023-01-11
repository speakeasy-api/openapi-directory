package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveactivityActivityQuerySecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveactivityActivityQuerySecurityOption1 option1;
    public DriveactivityActivityQuerySecurity withOption1(DriveactivityActivityQuerySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveactivityActivityQuerySecurityOption2 option2;
    public DriveactivityActivityQuerySecurity withOption2(DriveactivityActivityQuerySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}