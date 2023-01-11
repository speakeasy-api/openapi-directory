package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest {
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams pathParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest withPathParams(PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams queryParams;
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest withQueryParams(PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput request;
    public PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest withRequest(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput request) {
        this.request = request;
        return this;
    }
}