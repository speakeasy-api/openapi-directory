package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageProjectsHmacKeysUpdateSecurityOption1 option1;
    public StorageProjectsHmacKeysUpdateSecurity withOption1(StorageProjectsHmacKeysUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageProjectsHmacKeysUpdateSecurityOption2 option2;
    public StorageProjectsHmacKeysUpdateSecurity withOption2(StorageProjectsHmacKeysUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}