package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse;
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse withGoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse) {
        this.googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse = googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}