package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesCreateSecurityOption1 option1;
    public DriveFilesCreateSecurity withOption1(DriveFilesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesCreateSecurityOption2 option2;
    public DriveFilesCreateSecurity withOption2(DriveFilesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesCreateSecurityOption3 option3;
    public DriveFilesCreateSecurity withOption3(DriveFilesCreateSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}