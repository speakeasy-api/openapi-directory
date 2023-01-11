package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest {
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendPathParams pathParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest withPathParams(PaymentsresellersubscriptionPartnersSubscriptionsExtendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendQueryParams queryParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest withQueryParams(PaymentsresellersubscriptionPartnersSubscriptionsExtendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest request;
    public PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest withRequest(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest request) {
        this.request = request;
        return this;
    }
}