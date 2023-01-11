package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsGetSecurityOption1 option1;
    public StorageObjectAccessControlsGetSecurity withOption1(StorageObjectAccessControlsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsGetSecurityOption2 option2;
    public StorageObjectAccessControlsGetSecurity withOption2(StorageObjectAccessControlsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}