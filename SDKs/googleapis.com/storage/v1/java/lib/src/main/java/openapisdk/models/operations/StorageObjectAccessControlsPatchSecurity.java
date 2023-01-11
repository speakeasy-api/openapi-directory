package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectAccessControlsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsPatchSecurityOption1 option1;
    public StorageObjectAccessControlsPatchSecurity withOption1(StorageObjectAccessControlsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectAccessControlsPatchSecurityOption2 option2;
    public StorageObjectAccessControlsPatchSecurity withOption2(StorageObjectAccessControlsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}