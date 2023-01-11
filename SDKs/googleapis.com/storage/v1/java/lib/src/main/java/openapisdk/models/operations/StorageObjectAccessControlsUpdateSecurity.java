package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsUpdateSecurityOption1 option1;
    public StorageObjectAccessControlsUpdateSecurity withOption1(StorageObjectAccessControlsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsUpdateSecurityOption2 option2;
    public StorageObjectAccessControlsUpdateSecurity withOption2(StorageObjectAccessControlsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}