package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingbudgetsBillingAccountsBudgetsCreateRequest {
    public BillingbudgetsBillingAccountsBudgetsCreatePathParams pathParams;
    public BillingbudgetsBillingAccountsBudgetsCreateRequest withPathParams(BillingbudgetsBillingAccountsBudgetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BillingbudgetsBillingAccountsBudgetsCreateQueryParams queryParams;
    public BillingbudgetsBillingAccountsBudgetsCreateRequest withQueryParams(BillingbudgetsBillingAccountsBudgetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1BudgetInput request;
    public BillingbudgetsBillingAccountsBudgetsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudBillingBudgetsV1BudgetInput request) {
        this.request = request;
        return this;
    }
    public BillingbudgetsBillingAccountsBudgetsCreateSecurity security;
    public BillingbudgetsBillingAccountsBudgetsCreateRequest withSecurity(BillingbudgetsBillingAccountsBudgetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}