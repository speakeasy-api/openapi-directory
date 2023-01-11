package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveCommentsListSecurityOption1 option1;
    public DriveCommentsListSecurity withOption1(DriveCommentsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveCommentsListSecurityOption2 option2;
    public DriveCommentsListSecurity withOption2(DriveCommentsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveCommentsListSecurityOption3 option3;
    public DriveCommentsListSecurity withOption3(DriveCommentsListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}