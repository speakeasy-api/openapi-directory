package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV4PayeesPayeeIdRemoteIdUpdateRequest {
    public PostV4PayeesPayeeIdRemoteIdUpdatePathParams pathParams;
    public PostV4PayeesPayeeIdRemoteIdUpdateRequest withPathParams(PostV4PayeesPayeeIdRemoteIdUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRemoteIdRequest2 request;
    public PostV4PayeesPayeeIdRemoteIdUpdateRequest withRequest(openapisdk.models.shared.UpdateRemoteIdRequest2 request) {
        this.request = request;
        return this;
    }
}