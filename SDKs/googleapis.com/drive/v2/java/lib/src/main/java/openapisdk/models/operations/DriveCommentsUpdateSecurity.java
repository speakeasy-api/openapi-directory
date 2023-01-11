package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveCommentsUpdateSecurityOption1 option1;
    public DriveCommentsUpdateSecurity withOption1(DriveCommentsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveCommentsUpdateSecurityOption2 option2;
    public DriveCommentsUpdateSecurity withOption2(DriveCommentsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}