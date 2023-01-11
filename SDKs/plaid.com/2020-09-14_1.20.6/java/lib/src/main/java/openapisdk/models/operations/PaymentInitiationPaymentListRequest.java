package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentInitiationPaymentListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInitiationPaymentListRequest request;
    public PaymentInitiationPaymentListRequest withRequest(openapisdk.models.shared.PaymentInitiationPaymentListRequest request) {
        this.request = request;
        return this;
    }
}