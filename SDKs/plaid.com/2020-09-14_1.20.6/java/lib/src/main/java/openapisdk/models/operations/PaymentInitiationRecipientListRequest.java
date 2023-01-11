package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentInitiationRecipientListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInitiationRecipientListRequest request;
    public PaymentInitiationRecipientListRequest withRequest(openapisdk.models.shared.PaymentInitiationRecipientListRequest request) {
        this.request = request;
        return this;
    }
}