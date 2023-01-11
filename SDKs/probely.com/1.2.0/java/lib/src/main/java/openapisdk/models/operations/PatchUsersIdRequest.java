package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersIdRequest {
    public PatchUsersIdPathParams pathParams;
    public PatchUsersIdRequest withPathParams(PatchUsersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchUsersIdRequestBodyInput request;
    public PatchUsersIdRequest withRequest(PatchUsersIdRequestBodyInput request) {
        this.request = request;
        return this;
    }
}