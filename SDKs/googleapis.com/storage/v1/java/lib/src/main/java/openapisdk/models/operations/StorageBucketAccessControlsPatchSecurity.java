package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsPatchSecurityOption1 option1;
    public StorageBucketAccessControlsPatchSecurity withOption1(StorageBucketAccessControlsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketAccessControlsPatchSecurityOption2 option2;
    public StorageBucketAccessControlsPatchSecurity withOption2(StorageBucketAccessControlsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}