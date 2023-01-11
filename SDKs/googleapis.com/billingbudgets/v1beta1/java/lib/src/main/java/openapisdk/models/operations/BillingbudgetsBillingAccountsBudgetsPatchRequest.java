package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsPatchRequest {
    public BillingbudgetsBillingAccountsBudgetsPatchPathParams pathParams;
    public BillingbudgetsBillingAccountsBudgetsPatchRequest withPathParams(BillingbudgetsBillingAccountsBudgetsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BillingbudgetsBillingAccountsBudgetsPatchQueryParams queryParams;
    public BillingbudgetsBillingAccountsBudgetsPatchRequest withQueryParams(BillingbudgetsBillingAccountsBudgetsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput request;
    public BillingbudgetsBillingAccountsBudgetsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput request) {
        this.request = request;
        return this;
    }
    public BillingbudgetsBillingAccountsBudgetsPatchSecurity security;
    public BillingbudgetsBillingAccountsBudgetsPatchRequest withSecurity(BillingbudgetsBillingAccountsBudgetsPatchSecurity security) {
        this.security = security;
        return this;
    }
}