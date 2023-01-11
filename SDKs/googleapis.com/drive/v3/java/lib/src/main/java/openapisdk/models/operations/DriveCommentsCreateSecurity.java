package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveCommentsCreateSecurityOption1 option1;
    public DriveCommentsCreateSecurity withOption1(DriveCommentsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveCommentsCreateSecurityOption2 option2;
    public DriveCommentsCreateSecurity withOption2(DriveCommentsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}