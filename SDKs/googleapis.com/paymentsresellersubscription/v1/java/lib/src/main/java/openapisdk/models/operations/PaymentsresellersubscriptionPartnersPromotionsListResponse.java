package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersPromotionsListResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersPromotionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse;
    public PaymentsresellersubscriptionPartnersPromotionsListResponse withGoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse) {
        this.googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse = googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersPromotionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}