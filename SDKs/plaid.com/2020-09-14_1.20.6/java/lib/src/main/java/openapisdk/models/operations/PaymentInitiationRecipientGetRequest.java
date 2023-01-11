package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentInitiationRecipientGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInitiationRecipientGetRequest request;
    public PaymentInitiationRecipientGetRequest withRequest(openapisdk.models.shared.PaymentInitiationRecipientGetRequest request) {
        this.request = request;
        return this;
    }
}