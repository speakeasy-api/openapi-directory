package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsGetSecurityOption1 option1;
    public StorageDefaultObjectAccessControlsGetSecurity withOption1(StorageDefaultObjectAccessControlsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsGetSecurityOption2 option2;
    public StorageDefaultObjectAccessControlsGetSecurity withOption2(StorageDefaultObjectAccessControlsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}