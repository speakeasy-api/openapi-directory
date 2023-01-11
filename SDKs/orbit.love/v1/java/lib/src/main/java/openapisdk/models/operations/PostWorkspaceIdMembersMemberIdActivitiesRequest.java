package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdMembersMemberIdActivitiesRequest {
    public PostWorkspaceIdMembersMemberIdActivitiesPathParams pathParams;
    public PostWorkspaceIdMembersMemberIdActivitiesRequest withPathParams(PostWorkspaceIdMembersMemberIdActivitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostWorkspaceIdMembersMemberIdActivitiesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostWorkspaceIdMembersMemberIdActivitiesSecurity security;
    public PostWorkspaceIdMembersMemberIdActivitiesRequest withSecurity(PostWorkspaceIdMembersMemberIdActivitiesSecurity security) {
        this.security = security;
        return this;
    }
}