package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsForUserRequest {
    public GetGroupsForUserPathParams pathParams;
    public GetGroupsForUserRequest withPathParams(GetGroupsForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public GetGroupsForUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}