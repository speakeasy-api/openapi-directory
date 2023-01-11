package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsDeleteSecurityOption1 option1;
    public StorageBucketAccessControlsDeleteSecurity withOption1(StorageBucketAccessControlsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsDeleteSecurityOption2 option2;
    public StorageBucketAccessControlsDeleteSecurity withOption2(StorageBucketAccessControlsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}