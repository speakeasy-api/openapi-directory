package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse;
    public PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse withGoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse) {
        this.googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse = googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}