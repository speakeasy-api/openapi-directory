package openapisdk.models.operations;



public class BillingbudgetsBillingAccountsBudgetsCreateResponse {
    public String contentType;
    public BillingbudgetsBillingAccountsBudgetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1Budget googleCloudBillingBudgetsV1Budget;
    public BillingbudgetsBillingAccountsBudgetsCreateResponse withGoogleCloudBillingBudgetsV1Budget(openapisdk.models.shared.GoogleCloudBillingBudgetsV1Budget googleCloudBillingBudgetsV1Budget) {
        this.googleCloudBillingBudgetsV1Budget = googleCloudBillingBudgetsV1Budget;
        return this;
    }
    public Long statusCode;
    public BillingbudgetsBillingAccountsBudgetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}