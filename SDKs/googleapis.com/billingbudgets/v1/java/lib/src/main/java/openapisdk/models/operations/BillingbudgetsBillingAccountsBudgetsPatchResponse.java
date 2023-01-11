package openapisdk.models.operations;



public class BillingbudgetsBillingAccountsBudgetsPatchResponse {
    public String contentType;
    public BillingbudgetsBillingAccountsBudgetsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1Budget googleCloudBillingBudgetsV1Budget;
    public BillingbudgetsBillingAccountsBudgetsPatchResponse withGoogleCloudBillingBudgetsV1Budget(openapisdk.models.shared.GoogleCloudBillingBudgetsV1Budget googleCloudBillingBudgetsV1Budget) {
        this.googleCloudBillingBudgetsV1Budget = googleCloudBillingBudgetsV1Budget;
        return this;
    }
    public Long statusCode;
    public BillingbudgetsBillingAccountsBudgetsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}