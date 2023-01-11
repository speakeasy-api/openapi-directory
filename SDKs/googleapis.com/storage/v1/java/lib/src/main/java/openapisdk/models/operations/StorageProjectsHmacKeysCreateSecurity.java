package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageProjectsHmacKeysCreateSecurityOption1 option1;
    public StorageProjectsHmacKeysCreateSecurity withOption1(StorageProjectsHmacKeysCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageProjectsHmacKeysCreateSecurityOption2 option2;
    public StorageProjectsHmacKeysCreateSecurity withOption2(StorageProjectsHmacKeysCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}