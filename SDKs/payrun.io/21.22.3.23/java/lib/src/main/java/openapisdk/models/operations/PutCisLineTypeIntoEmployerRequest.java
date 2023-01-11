package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCisLineTypeIntoEmployerRequest {
    public PutCisLineTypeIntoEmployerPathParams pathParams;
    public PutCisLineTypeIntoEmployerRequest withPathParams(PutCisLineTypeIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutCisLineTypeIntoEmployerHeaders headers;
    public PutCisLineTypeIntoEmployerRequest withHeaders(PutCisLineTypeIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CisLineType request;
    public PutCisLineTypeIntoEmployerRequest withRequest(openapisdk.models.shared.CisLineType request) {
        this.request = request;
        return this;
    }
}