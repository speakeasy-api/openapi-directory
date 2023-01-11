package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsDeleteSecurityOption1 option1;
    public StorageBucketsDeleteSecurity withOption1(StorageBucketsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsDeleteSecurityOption2 option2;
    public StorageBucketsDeleteSecurity withOption2(StorageBucketsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsDeleteSecurityOption3 option3;
    public StorageBucketsDeleteSecurity withOption3(StorageBucketsDeleteSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}