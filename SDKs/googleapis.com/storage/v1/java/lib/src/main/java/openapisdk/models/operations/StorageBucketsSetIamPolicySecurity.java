package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsSetIamPolicySecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsSetIamPolicySecurityOption1 option1;
    public StorageBucketsSetIamPolicySecurity withOption1(StorageBucketsSetIamPolicySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsSetIamPolicySecurityOption2 option2;
    public StorageBucketsSetIamPolicySecurity withOption2(StorageBucketsSetIamPolicySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}