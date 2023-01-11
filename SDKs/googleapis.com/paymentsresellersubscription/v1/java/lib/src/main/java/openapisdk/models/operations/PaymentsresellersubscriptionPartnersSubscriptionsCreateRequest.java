package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest {
    public PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams pathParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest withPathParams(PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams queryParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest withQueryParams(PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput request;
    public PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput request) {
        this.request = request;
        return this;
    }
}