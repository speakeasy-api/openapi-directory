package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FollowUsersRequest {
    public FollowUsersPathParams pathParams;
    public FollowUsersRequest withPathParams(FollowUsersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FollowUsersRequestBody request;
    public FollowUsersRequest withRequest(FollowUsersRequestBody request) {
        this.request = request;
        return this;
    }
    public FollowUsersSecurity security;
    public FollowUsersRequest withSecurity(FollowUsersSecurity security) {
        this.security = security;
        return this;
    }
}