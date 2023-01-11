package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesInsertSecurityOption1 option1;
    public DriveRepliesInsertSecurity withOption1(DriveRepliesInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveRepliesInsertSecurityOption2 option2;
    public DriveRepliesInsertSecurity withOption2(DriveRepliesInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}