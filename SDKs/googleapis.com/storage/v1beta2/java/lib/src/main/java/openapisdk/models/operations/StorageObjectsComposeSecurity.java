package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsComposeSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsComposeSecurityOption1 option1;
    public StorageObjectsComposeSecurity withOption1(StorageObjectsComposeSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsComposeSecurityOption2 option2;
    public StorageObjectsComposeSecurity withOption2(StorageObjectsComposeSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}