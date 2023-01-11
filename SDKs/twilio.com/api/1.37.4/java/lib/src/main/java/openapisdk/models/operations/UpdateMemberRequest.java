package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberRequest {
    public String serverURL;
    public UpdateMemberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateMemberPathParams pathParams;
    public UpdateMemberRequest withPathParams(UpdateMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateMemberUpdateMemberRequest request;
    public UpdateMemberRequest withRequest(UpdateMemberUpdateMemberRequest request) {
        this.request = request;
        return this;
    }
    public UpdateMemberSecurity security;
    public UpdateMemberRequest withSecurity(UpdateMemberSecurity security) {
        this.security = security;
        return this;
    }
}