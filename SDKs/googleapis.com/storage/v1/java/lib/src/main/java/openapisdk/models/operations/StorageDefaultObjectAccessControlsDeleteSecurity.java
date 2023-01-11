package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsDeleteSecurityOption1 option1;
    public StorageDefaultObjectAccessControlsDeleteSecurity withOption1(StorageDefaultObjectAccessControlsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsDeleteSecurityOption2 option2;
    public StorageDefaultObjectAccessControlsDeleteSecurity withOption2(StorageDefaultObjectAccessControlsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}