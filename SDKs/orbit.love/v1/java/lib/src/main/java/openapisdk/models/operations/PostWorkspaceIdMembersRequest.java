package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdMembersRequest {
    public PostWorkspaceIdMembersPathParams pathParams;
    public PostWorkspaceIdMembersRequest withPathParams(PostWorkspaceIdMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MemberAndIdentity request;
    public PostWorkspaceIdMembersRequest withRequest(openapisdk.models.shared.MemberAndIdentity request) {
        this.request = request;
        return this;
    }
    public PostWorkspaceIdMembersSecurity security;
    public PostWorkspaceIdMembersRequest withSecurity(PostWorkspaceIdMembersSecurity security) {
        this.security = security;
        return this;
    }
}