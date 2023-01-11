package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNominalCodeRequest {
    public PutNominalCodePathParams pathParams;
    public PutNominalCodeRequest withPathParams(PutNominalCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutNominalCodeHeaders headers;
    public PutNominalCodeRequest withHeaders(PutNominalCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NominalCode request;
    public PutNominalCodeRequest withRequest(openapisdk.models.shared.NominalCode request) {
        this.request = request;
        return this;
    }
}