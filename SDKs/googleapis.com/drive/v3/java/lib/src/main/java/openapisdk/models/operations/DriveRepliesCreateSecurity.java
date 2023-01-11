package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesCreateSecurityOption1 option1;
    public DriveRepliesCreateSecurity withOption1(DriveRepliesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesCreateSecurityOption2 option2;
    public DriveRepliesCreateSecurity withOption2(DriveRepliesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}