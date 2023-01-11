package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsUpdateSecurityOption1 option1;
    public StorageObjectsUpdateSecurity withOption1(StorageObjectsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsUpdateSecurityOption2 option2;
    public StorageObjectsUpdateSecurity withOption2(StorageObjectsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}