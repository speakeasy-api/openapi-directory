package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNominalCodeRequest {
    public PostNominalCodePathParams pathParams;
    public PostNominalCodeRequest withPathParams(PostNominalCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostNominalCodeHeaders headers;
    public PostNominalCodeRequest withHeaders(PostNominalCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NominalCode request;
    public PostNominalCodeRequest withRequest(openapisdk.models.shared.NominalCode request) {
        this.request = request;
        return this;
    }
}