package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsEstimateCostScenarioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingAccount")
    public String billingAccount;
    public CloudbillingBillingAccountsEstimateCostScenarioPathParams withBillingAccount(String billingAccount) {
        this.billingAccount = billingAccount;
        return this;
    }
}