package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest {
    public PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams pathParams;
    public PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest withPathParams(PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams queryParams;
    public PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest withQueryParams(PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest request;
    public PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest withRequest(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest request) {
        this.request = request;
        return this;
    }
}