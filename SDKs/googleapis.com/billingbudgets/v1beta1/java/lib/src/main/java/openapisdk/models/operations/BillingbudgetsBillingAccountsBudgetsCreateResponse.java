package openapisdk.models.operations;



public class BillingbudgetsBillingAccountsBudgetsCreateResponse {
    public String contentType;
    public BillingbudgetsBillingAccountsBudgetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget googleCloudBillingBudgetsV1beta1Budget;
    public BillingbudgetsBillingAccountsBudgetsCreateResponse withGoogleCloudBillingBudgetsV1beta1Budget(openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget googleCloudBillingBudgetsV1beta1Budget) {
        this.googleCloudBillingBudgetsV1beta1Budget = googleCloudBillingBudgetsV1beta1Budget;
        return this;
    }
    public Long statusCode;
    public BillingbudgetsBillingAccountsBudgetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}