package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsCopySecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsCopySecurityOption1 option1;
    public StorageObjectsCopySecurity withOption1(StorageObjectsCopySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsCopySecurityOption2 option2;
    public StorageObjectsCopySecurity withOption2(StorageObjectsCopySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageObjectsCopySecurityOption3 option3;
    public StorageObjectsCopySecurity withOption3(StorageObjectsCopySecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}