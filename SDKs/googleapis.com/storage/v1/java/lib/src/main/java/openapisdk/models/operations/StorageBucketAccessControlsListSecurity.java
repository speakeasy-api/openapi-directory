package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsListSecurityOption1 option1;
    public StorageBucketAccessControlsListSecurity withOption1(StorageBucketAccessControlsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsListSecurityOption2 option2;
    public StorageBucketAccessControlsListSecurity withOption2(StorageBucketAccessControlsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}