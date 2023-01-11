package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesUpdateSecurityOption1 option1;
    public DriveRepliesUpdateSecurity withOption1(DriveRepliesUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesUpdateSecurityOption2 option2;
    public DriveRepliesUpdateSecurity withOption2(DriveRepliesUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}