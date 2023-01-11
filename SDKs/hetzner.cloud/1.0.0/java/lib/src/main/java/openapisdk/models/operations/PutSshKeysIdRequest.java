package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSshKeysIdRequest {
    public PutSshKeysIdPathParams pathParams;
    public PutSshKeysIdRequest withPathParams(PutSshKeysIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutSshKeysIdRequestBody request;
    public PutSshKeysIdRequest withRequest(PutSshKeysIdRequestBody request) {
        this.request = request;
        return this;
    }
}