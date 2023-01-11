package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBillingRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Billing request;
    public PatchBillingRequest withRequest(openapisdk.models.shared.Billing request) {
        this.request = request;
        return this;
    }
}