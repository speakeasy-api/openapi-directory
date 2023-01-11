package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesDeleteSecurityOption1 option1;
    public DriveRepliesDeleteSecurity withOption1(DriveRepliesDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesDeleteSecurityOption2 option2;
    public DriveRepliesDeleteSecurity withOption2(DriveRepliesDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}