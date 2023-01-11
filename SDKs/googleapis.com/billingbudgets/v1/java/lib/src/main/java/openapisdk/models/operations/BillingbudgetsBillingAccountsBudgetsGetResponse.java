package openapisdk.models.operations;



public class BillingbudgetsBillingAccountsBudgetsGetResponse {
    public String contentType;
    public BillingbudgetsBillingAccountsBudgetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1Budget googleCloudBillingBudgetsV1Budget;
    public BillingbudgetsBillingAccountsBudgetsGetResponse withGoogleCloudBillingBudgetsV1Budget(openapisdk.models.shared.GoogleCloudBillingBudgetsV1Budget googleCloudBillingBudgetsV1Budget) {
        this.googleCloudBillingBudgetsV1Budget = googleCloudBillingBudgetsV1Budget;
        return this;
    }
    public Long statusCode;
    public BillingbudgetsBillingAccountsBudgetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}