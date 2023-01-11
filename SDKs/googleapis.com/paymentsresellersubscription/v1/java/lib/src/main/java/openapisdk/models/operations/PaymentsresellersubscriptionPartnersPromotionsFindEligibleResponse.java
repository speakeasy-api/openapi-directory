package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse;
    public PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse withGoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse) {
        this.googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse = googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}