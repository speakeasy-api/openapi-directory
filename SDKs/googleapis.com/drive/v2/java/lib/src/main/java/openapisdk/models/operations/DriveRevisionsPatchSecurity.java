package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRevisionsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveRevisionsPatchSecurityOption1 option1;
    public DriveRevisionsPatchSecurity withOption1(DriveRevisionsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveRevisionsPatchSecurityOption2 option2;
    public DriveRevisionsPatchSecurity withOption2(DriveRevisionsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveRevisionsPatchSecurityOption3 option3;
    public DriveRevisionsPatchSecurity withOption3(DriveRevisionsPatchSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}