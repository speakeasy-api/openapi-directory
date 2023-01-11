package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest {
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitlePathParams pathParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest withPathParams(PaymentsresellersubscriptionPartnersSubscriptionsEntitlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitleQueryParams queryParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest withQueryParams(PaymentsresellersubscriptionPartnersSubscriptionsEntitleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}