package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse;
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse withGoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse) {
        this.googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse = googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}