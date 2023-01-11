package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentInitiationRecipientCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInitiationRecipientCreateRequest request;
    public PaymentInitiationRecipientCreateRequest withRequest(openapisdk.models.shared.PaymentInitiationRecipientCreateRequest request) {
        this.request = request;
        return this;
    }
}