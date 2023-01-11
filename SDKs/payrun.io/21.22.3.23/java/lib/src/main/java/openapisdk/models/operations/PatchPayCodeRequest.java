package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPayCodeRequest {
    public PatchPayCodePathParams pathParams;
    public PatchPayCodeRequest withPathParams(PatchPayCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchPayCodeHeaders headers;
    public PatchPayCodeRequest withHeaders(PatchPayCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayCode request;
    public PatchPayCodeRequest withRequest(openapisdk.models.shared.PayCode request) {
        this.request = request;
        return this;
    }
}