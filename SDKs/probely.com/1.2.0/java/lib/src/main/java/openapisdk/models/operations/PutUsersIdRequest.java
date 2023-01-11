package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersIdRequest {
    public PutUsersIdPathParams pathParams;
    public PutUsersIdRequest withPathParams(PutUsersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutUsersIdRequestBodyInput request;
    public PutUsersIdRequest withRequest(PutUsersIdRequestBodyInput request) {
        this.request = request;
        return this;
    }
}