package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsGetSecurityOption1 option1;
    public StorageBucketAccessControlsGetSecurity withOption1(StorageBucketAccessControlsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsGetSecurityOption2 option2;
    public StorageBucketAccessControlsGetSecurity withOption2(StorageBucketAccessControlsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}