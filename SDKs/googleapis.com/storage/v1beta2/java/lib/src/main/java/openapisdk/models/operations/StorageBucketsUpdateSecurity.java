package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsUpdateSecurityOption1 option1;
    public StorageBucketsUpdateSecurity withOption1(StorageBucketsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsUpdateSecurityOption2 option2;
    public StorageBucketsUpdateSecurity withOption2(StorageBucketsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}