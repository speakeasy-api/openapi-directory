package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesExportSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesExportSecurityOption1 option1;
    public DriveFilesExportSecurity withOption1(DriveFilesExportSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesExportSecurityOption2 option2;
    public DriveFilesExportSecurity withOption2(DriveFilesExportSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesExportSecurityOption3 option3;
    public DriveFilesExportSecurity withOption3(DriveFilesExportSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}