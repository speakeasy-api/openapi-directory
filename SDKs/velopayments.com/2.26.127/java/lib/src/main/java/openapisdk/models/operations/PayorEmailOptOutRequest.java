package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorEmailOptOutRequest {
    public PayorEmailOptOutPathParams pathParams;
    public PayorEmailOptOutRequest withPathParams(PayorEmailOptOutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayorEmailOptOutRequest request;
    public PayorEmailOptOutRequest withRequest(openapisdk.models.shared.PayorEmailOptOutRequest request) {
        this.request = request;
        return this;
    }
}