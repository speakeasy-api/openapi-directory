package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsUpdateSecurityOption1 option1;
    public StorageDefaultObjectAccessControlsUpdateSecurity withOption1(StorageDefaultObjectAccessControlsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsUpdateSecurityOption2 option2;
    public StorageDefaultObjectAccessControlsUpdateSecurity withOption2(StorageDefaultObjectAccessControlsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}