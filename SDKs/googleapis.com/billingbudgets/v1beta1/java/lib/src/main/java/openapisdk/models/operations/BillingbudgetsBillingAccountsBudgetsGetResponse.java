package openapisdk.models.operations;



public class BillingbudgetsBillingAccountsBudgetsGetResponse {
    public String contentType;
    public BillingbudgetsBillingAccountsBudgetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget googleCloudBillingBudgetsV1beta1Budget;
    public BillingbudgetsBillingAccountsBudgetsGetResponse withGoogleCloudBillingBudgetsV1beta1Budget(openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1Budget googleCloudBillingBudgetsV1beta1Budget) {
        this.googleCloudBillingBudgetsV1beta1Budget = googleCloudBillingBudgetsV1beta1Budget;
        return this;
    }
    public Long statusCode;
    public BillingbudgetsBillingAccountsBudgetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}