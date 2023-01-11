package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerFoldersSearchSecurityOption1 option1;
    public CloudresourcemanagerFoldersSearchSecurity withOption1(CloudresourcemanagerFoldersSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerFoldersSearchSecurityOption2 option2;
    public CloudresourcemanagerFoldersSearchSecurity withOption2(CloudresourcemanagerFoldersSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}