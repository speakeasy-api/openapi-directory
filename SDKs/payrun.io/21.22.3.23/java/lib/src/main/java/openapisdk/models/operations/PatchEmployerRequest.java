package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchEmployerRequest {
    public PatchEmployerPathParams pathParams;
    public PatchEmployerRequest withPathParams(PatchEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchEmployerHeaders headers;
    public PatchEmployerRequest withHeaders(PatchEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employer request;
    public PatchEmployerRequest withRequest(openapisdk.models.shared.Employer request) {
        this.request = request;
        return this;
    }
}