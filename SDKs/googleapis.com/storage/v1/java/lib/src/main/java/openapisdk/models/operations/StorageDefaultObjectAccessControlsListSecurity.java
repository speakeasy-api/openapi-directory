package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsListSecurityOption1 option1;
    public StorageDefaultObjectAccessControlsListSecurity withOption1(StorageDefaultObjectAccessControlsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsListSecurityOption2 option2;
    public StorageDefaultObjectAccessControlsListSecurity withOption2(StorageDefaultObjectAccessControlsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}