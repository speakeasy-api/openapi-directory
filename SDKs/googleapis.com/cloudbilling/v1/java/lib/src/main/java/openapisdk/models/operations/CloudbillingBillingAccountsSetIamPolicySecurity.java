package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsSetIamPolicySecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudbillingBillingAccountsSetIamPolicySecurityOption1 option1;
    public CloudbillingBillingAccountsSetIamPolicySecurity withOption1(CloudbillingBillingAccountsSetIamPolicySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudbillingBillingAccountsSetIamPolicySecurityOption2 option2;
    public CloudbillingBillingAccountsSetIamPolicySecurity withOption2(CloudbillingBillingAccountsSetIamPolicySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}