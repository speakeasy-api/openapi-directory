package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentInitiationPaymentGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInitiationPaymentGetRequest request;
    public PaymentInitiationPaymentGetRequest withRequest(openapisdk.models.shared.PaymentInitiationPaymentGetRequest request) {
        this.request = request;
        return this;
    }
}