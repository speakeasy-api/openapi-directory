package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersIdRequest {
    public PutUsersIdPathParams pathParams;
    public PutUsersIdRequest withPathParams(PutUsersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.User request;
    public PutUsersIdRequest withRequest(openapisdk.models.shared.User request) {
        this.request = request;
        return this;
    }
}