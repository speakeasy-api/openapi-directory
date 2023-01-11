package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerBudgetUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdexchangebuyerBudgetUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingId")
    public String billingId;
    public AdexchangebuyerBudgetUpdatePathParams withBillingId(String billingId) {
        this.billingId = billingId;
        return this;
    }
}