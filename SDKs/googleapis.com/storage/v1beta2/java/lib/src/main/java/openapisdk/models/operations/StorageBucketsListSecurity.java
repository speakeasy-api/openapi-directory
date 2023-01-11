package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsListSecurityOption1 option1;
    public StorageBucketsListSecurity withOption1(StorageBucketsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsListSecurityOption2 option2;
    public StorageBucketsListSecurity withOption2(StorageBucketsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsListSecurityOption3 option3;
    public StorageBucketsListSecurity withOption3(StorageBucketsListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}