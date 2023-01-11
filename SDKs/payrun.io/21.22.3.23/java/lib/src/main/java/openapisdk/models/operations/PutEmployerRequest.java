package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmployerRequest {
    public PutEmployerPathParams pathParams;
    public PutEmployerRequest withPathParams(PutEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmployerHeaders headers;
    public PutEmployerRequest withHeaders(PutEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employer request;
    public PutEmployerRequest withRequest(openapisdk.models.shared.Employer request) {
        this.request = request;
        return this;
    }
}