package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse;
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse withGoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse) {
        this.googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse = googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}