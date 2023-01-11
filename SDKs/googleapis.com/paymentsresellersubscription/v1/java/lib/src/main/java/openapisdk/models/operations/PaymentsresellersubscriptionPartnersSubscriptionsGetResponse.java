package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersSubscriptionsGetResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersSubscriptionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription googleCloudPaymentsResellerSubscriptionV1Subscription;
    public PaymentsresellersubscriptionPartnersSubscriptionsGetResponse withGoogleCloudPaymentsResellerSubscriptionV1Subscription(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription googleCloudPaymentsResellerSubscriptionV1Subscription) {
        this.googleCloudPaymentsResellerSubscriptionV1Subscription = googleCloudPaymentsResellerSubscriptionV1Subscription;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersSubscriptionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}