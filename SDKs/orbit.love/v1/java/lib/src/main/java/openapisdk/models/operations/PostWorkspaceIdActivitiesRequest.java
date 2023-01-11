package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdActivitiesRequest {
    public PostWorkspaceIdActivitiesPathParams pathParams;
    public PostWorkspaceIdActivitiesRequest withPathParams(PostWorkspaceIdActivitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivityAndIdentity request;
    public PostWorkspaceIdActivitiesRequest withRequest(openapisdk.models.shared.ActivityAndIdentity request) {
        this.request = request;
        return this;
    }
    public PostWorkspaceIdActivitiesSecurity security;
    public PostWorkspaceIdActivitiesRequest withSecurity(PostWorkspaceIdActivitiesSecurity security) {
        this.security = security;
        return this;
    }
}