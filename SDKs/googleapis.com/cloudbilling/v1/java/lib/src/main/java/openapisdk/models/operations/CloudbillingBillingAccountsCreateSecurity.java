package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudbillingBillingAccountsCreateSecurityOption1 option1;
    public CloudbillingBillingAccountsCreateSecurity withOption1(CloudbillingBillingAccountsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudbillingBillingAccountsCreateSecurityOption2 option2;
    public CloudbillingBillingAccountsCreateSecurity withOption2(CloudbillingBillingAccountsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}