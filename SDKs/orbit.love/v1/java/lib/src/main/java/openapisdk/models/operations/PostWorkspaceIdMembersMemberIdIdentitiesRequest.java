package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdMembersMemberIdIdentitiesRequest {
    public PostWorkspaceIdMembersMemberIdIdentitiesPathParams pathParams;
    public PostWorkspaceIdMembersMemberIdIdentitiesRequest withPathParams(PostWorkspaceIdMembersMemberIdIdentitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Identity request;
    public PostWorkspaceIdMembersMemberIdIdentitiesRequest withRequest(openapisdk.models.shared.Identity request) {
        this.request = request;
        return this;
    }
    public PostWorkspaceIdMembersMemberIdIdentitiesSecurity security;
    public PostWorkspaceIdMembersMemberIdIdentitiesRequest withSecurity(PostWorkspaceIdMembersMemberIdIdentitiesSecurity security) {
        this.security = security;
        return this;
    }
}