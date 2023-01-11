package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayCodeRequest {
    public PutPayCodePathParams pathParams;
    public PutPayCodeRequest withPathParams(PutPayCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPayCodeHeaders headers;
    public PutPayCodeRequest withHeaders(PutPayCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayCode request;
    public PutPayCodeRequest withRequest(openapisdk.models.shared.PayCode request) {
        this.request = request;
        return this;
    }
}