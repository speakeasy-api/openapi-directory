package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorCreateApplicationRequestRequest {
    public PayorCreateApplicationRequestPathParams pathParams;
    public PayorCreateApplicationRequestRequest withPathParams(PayorCreateApplicationRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayorCreateApplicationRequest request;
    public PayorCreateApplicationRequestRequest withRequest(openapisdk.models.shared.PayorCreateApplicationRequest request) {
        this.request = request;
        return this;
    }
}