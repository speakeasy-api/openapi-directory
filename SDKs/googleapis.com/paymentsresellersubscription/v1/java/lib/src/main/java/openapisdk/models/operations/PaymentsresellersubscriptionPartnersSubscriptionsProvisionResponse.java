package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription googleCloudPaymentsResellerSubscriptionV1Subscription;
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse withGoogleCloudPaymentsResellerSubscriptionV1Subscription(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription googleCloudPaymentsResellerSubscriptionV1Subscription) {
        this.googleCloudPaymentsResellerSubscriptionV1Subscription = googleCloudPaymentsResellerSubscriptionV1Subscription;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}