package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberRequest {
    public CreateMemberPathParams pathParams;
    public CreateMemberRequest withPathParams(CreateMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMemberRequestBody request;
    public CreateMemberRequest withRequest(CreateMemberRequestBody request) {
        this.request = request;
        return this;
    }
}