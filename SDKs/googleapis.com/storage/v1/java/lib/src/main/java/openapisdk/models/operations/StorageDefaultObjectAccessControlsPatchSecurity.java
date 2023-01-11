package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsPatchSecurityOption1 option1;
    public StorageDefaultObjectAccessControlsPatchSecurity withOption1(StorageDefaultObjectAccessControlsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageDefaultObjectAccessControlsPatchSecurityOption2 option2;
    public StorageDefaultObjectAccessControlsPatchSecurity withOption2(StorageDefaultObjectAccessControlsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}