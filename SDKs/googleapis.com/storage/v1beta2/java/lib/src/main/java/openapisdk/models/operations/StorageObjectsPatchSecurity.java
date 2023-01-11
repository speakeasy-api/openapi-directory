package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsPatchSecurityOption1 option1;
    public StorageObjectsPatchSecurity withOption1(StorageObjectsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsPatchSecurityOption2 option2;
    public StorageObjectsPatchSecurity withOption2(StorageObjectsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}