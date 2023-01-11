package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsPatchSecurityOption1 option1;
    public StorageBucketsPatchSecurity withOption1(StorageBucketsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsPatchSecurityOption2 option2;
    public StorageBucketsPatchSecurity withOption2(StorageBucketsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}