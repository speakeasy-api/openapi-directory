package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsListSecurityOption1 option1;
    public StorageObjectAccessControlsListSecurity withOption1(StorageObjectAccessControlsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsListSecurityOption2 option2;
    public StorageObjectAccessControlsListSecurity withOption2(StorageObjectAccessControlsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}