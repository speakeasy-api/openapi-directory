package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsGetIamPolicySecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsGetIamPolicySecurityOption1 option1;
    public StorageBucketsGetIamPolicySecurity withOption1(StorageBucketsGetIamPolicySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageBucketsGetIamPolicySecurityOption2 option2;
    public StorageBucketsGetIamPolicySecurity withOption2(StorageBucketsGetIamPolicySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}