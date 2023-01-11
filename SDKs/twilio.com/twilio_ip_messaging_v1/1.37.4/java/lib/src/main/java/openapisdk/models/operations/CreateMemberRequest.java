package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberRequest {
    public String serverURL;
    public CreateMemberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateMemberPathParams pathParams;
    public CreateMemberRequest withPathParams(CreateMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateMemberCreateMemberRequest request;
    public CreateMemberRequest withRequest(CreateMemberCreateMemberRequest request) {
        this.request = request;
        return this;
    }
    public CreateMemberSecurity security;
    public CreateMemberRequest withSecurity(CreateMemberSecurity security) {
        this.security = security;
        return this;
    }
}