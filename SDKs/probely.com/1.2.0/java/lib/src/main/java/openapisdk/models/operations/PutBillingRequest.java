package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBillingRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Billing request;
    public PutBillingRequest withRequest(openapisdk.models.shared.Billing request) {
        this.request = request;
        return this;
    }
}