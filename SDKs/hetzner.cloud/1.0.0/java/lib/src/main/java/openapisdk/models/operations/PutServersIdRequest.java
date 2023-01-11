package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutServersIdRequest {
    public PutServersIdPathParams pathParams;
    public PutServersIdRequest withPathParams(PutServersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutServersIdUpdateServerRequest request;
    public PutServersIdRequest withRequest(PutServersIdUpdateServerRequest request) {
        this.request = request;
        return this;
    }
}