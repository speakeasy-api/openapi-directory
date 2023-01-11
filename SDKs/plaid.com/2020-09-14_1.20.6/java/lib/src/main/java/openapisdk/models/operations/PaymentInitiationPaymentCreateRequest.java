package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentInitiationPaymentCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInitiationPaymentCreateRequest request;
    public PaymentInitiationPaymentCreateRequest withRequest(openapisdk.models.shared.PaymentInitiationPaymentCreateRequest request) {
        this.request = request;
        return this;
    }
}