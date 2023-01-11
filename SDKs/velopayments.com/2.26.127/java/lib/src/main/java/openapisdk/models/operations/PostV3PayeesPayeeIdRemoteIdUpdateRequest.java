package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3PayeesPayeeIdRemoteIdUpdateRequest {
    public PostV3PayeesPayeeIdRemoteIdUpdatePathParams pathParams;
    public PostV3PayeesPayeeIdRemoteIdUpdateRequest withPathParams(PostV3PayeesPayeeIdRemoteIdUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRemoteIdRequest request;
    public PostV3PayeesPayeeIdRemoteIdUpdateRequest withRequest(openapisdk.models.shared.UpdateRemoteIdRequest request) {
        this.request = request;
        return this;
    }
}