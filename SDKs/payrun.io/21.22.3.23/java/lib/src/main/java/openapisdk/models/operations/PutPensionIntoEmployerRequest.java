package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPensionIntoEmployerRequest {
    public PutPensionIntoEmployerPathParams pathParams;
    public PutPensionIntoEmployerRequest withPathParams(PutPensionIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPensionIntoEmployerHeaders headers;
    public PutPensionIntoEmployerRequest withHeaders(PutPensionIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Pension request;
    public PutPensionIntoEmployerRequest withRequest(openapisdk.models.shared.Pension request) {
        this.request = request;
        return this;
    }
}