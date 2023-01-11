package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerBudgetGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdexchangebuyerBudgetGetPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingId")
    public String billingId;
    public AdexchangebuyerBudgetGetPathParams withBillingId(String billingId) {
        this.billingId = billingId;
        return this;
    }
}