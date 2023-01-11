package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberRequest {
    public UpdateMemberPathParams pathParams;
    public UpdateMemberRequest withPathParams(UpdateMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateMemberRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}