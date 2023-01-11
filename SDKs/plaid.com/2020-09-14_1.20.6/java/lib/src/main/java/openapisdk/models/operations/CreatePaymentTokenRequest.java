package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePaymentTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInitiationPaymentTokenCreateRequest request;
    public CreatePaymentTokenRequest withRequest(openapisdk.models.shared.PaymentInitiationPaymentTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}