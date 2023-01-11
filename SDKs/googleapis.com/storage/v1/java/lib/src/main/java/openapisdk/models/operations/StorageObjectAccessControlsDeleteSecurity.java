package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsDeleteSecurityOption1 option1;
    public StorageObjectAccessControlsDeleteSecurity withOption1(StorageObjectAccessControlsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsDeleteSecurityOption2 option2;
    public StorageObjectAccessControlsDeleteSecurity withOption2(StorageObjectAccessControlsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}