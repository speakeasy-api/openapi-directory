package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPensionRequest {
    public PatchPensionPathParams pathParams;
    public PatchPensionRequest withPathParams(PatchPensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchPensionHeaders headers;
    public PatchPensionRequest withHeaders(PatchPensionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Pension request;
    public PatchPensionRequest withRequest(openapisdk.models.shared.Pension request) {
        this.request = request;
        return this;
    }
}