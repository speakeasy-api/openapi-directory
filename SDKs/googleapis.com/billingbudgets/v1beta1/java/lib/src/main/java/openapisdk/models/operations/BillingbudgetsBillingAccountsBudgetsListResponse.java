package openapisdk.models.operations;



public class BillingbudgetsBillingAccountsBudgetsListResponse {
    public String contentType;
    public BillingbudgetsBillingAccountsBudgetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse googleCloudBillingBudgetsV1beta1ListBudgetsResponse;
    public BillingbudgetsBillingAccountsBudgetsListResponse withGoogleCloudBillingBudgetsV1beta1ListBudgetsResponse(openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse googleCloudBillingBudgetsV1beta1ListBudgetsResponse) {
        this.googleCloudBillingBudgetsV1beta1ListBudgetsResponse = googleCloudBillingBudgetsV1beta1ListBudgetsResponse;
        return this;
    }
    public Long statusCode;
    public BillingbudgetsBillingAccountsBudgetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}