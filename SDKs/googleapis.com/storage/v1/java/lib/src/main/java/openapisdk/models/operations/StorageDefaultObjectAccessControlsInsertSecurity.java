package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsInsertSecurityOption1 option1;
    public StorageDefaultObjectAccessControlsInsertSecurity withOption1(StorageDefaultObjectAccessControlsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsInsertSecurityOption2 option2;
    public StorageDefaultObjectAccessControlsInsertSecurity withOption2(StorageDefaultObjectAccessControlsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}