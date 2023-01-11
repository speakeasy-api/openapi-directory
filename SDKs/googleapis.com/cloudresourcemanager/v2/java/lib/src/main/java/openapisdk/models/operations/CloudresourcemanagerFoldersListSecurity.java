package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerFoldersListSecurityOption1 option1;
    public CloudresourcemanagerFoldersListSecurity withOption1(CloudresourcemanagerFoldersListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerFoldersListSecurityOption2 option2;
    public CloudresourcemanagerFoldersListSecurity withOption2(CloudresourcemanagerFoldersListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}