package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsRewriteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsRewriteSecurityOption1 option1;
    public StorageObjectsRewriteSecurity withOption1(StorageObjectsRewriteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsRewriteSecurityOption2 option2;
    public StorageObjectsRewriteSecurity withOption2(StorageObjectsRewriteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsRewriteSecurityOption3 option3;
    public StorageObjectsRewriteSecurity withOption3(StorageObjectsRewriteSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}