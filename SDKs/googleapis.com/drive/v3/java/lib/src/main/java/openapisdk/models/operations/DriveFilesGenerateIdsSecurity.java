package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesGenerateIdsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesGenerateIdsSecurityOption1 option1;
    public DriveFilesGenerateIdsSecurity withOption1(DriveFilesGenerateIdsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesGenerateIdsSecurityOption2 option2;
    public DriveFilesGenerateIdsSecurity withOption2(DriveFilesGenerateIdsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DriveFilesGenerateIdsSecurityOption3 option3;
    public DriveFilesGenerateIdsSecurity withOption3(DriveFilesGenerateIdsSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}