package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsInsertSecurityOption1 option1;
    public StorageBucketsInsertSecurity withOption1(StorageBucketsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsInsertSecurityOption2 option2;
    public StorageBucketsInsertSecurity withOption2(StorageBucketsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsInsertSecurityOption3 option3;
    public StorageBucketsInsertSecurity withOption3(StorageBucketsInsertSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}