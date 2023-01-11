package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription googleCloudPaymentsResellerSubscriptionV1Subscription;
    public PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse withGoogleCloudPaymentsResellerSubscriptionV1Subscription(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription googleCloudPaymentsResellerSubscriptionV1Subscription) {
        this.googleCloudPaymentsResellerSubscriptionV1Subscription = googleCloudPaymentsResellerSubscriptionV1Subscription;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}