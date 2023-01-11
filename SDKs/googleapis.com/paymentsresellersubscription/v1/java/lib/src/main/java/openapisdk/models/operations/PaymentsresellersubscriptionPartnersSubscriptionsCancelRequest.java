package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest {
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams pathParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest withPathParams(PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams queryParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest withQueryParams(PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest request;
    public PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest withRequest(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest request) {
        this.request = request;
        return this;
    }
}