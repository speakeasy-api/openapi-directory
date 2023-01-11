package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherUsersCreateRequest {
    public AndroidpublisherUsersCreatePathParams pathParams;
    public AndroidpublisherUsersCreateRequest withPathParams(AndroidpublisherUsersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherUsersCreateQueryParams queryParams;
    public AndroidpublisherUsersCreateRequest withQueryParams(AndroidpublisherUsersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public AndroidpublisherUsersCreateRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherUsersCreateSecurity security;
    public AndroidpublisherUsersCreateRequest withSecurity(AndroidpublisherUsersCreateSecurity security) {
        this.security = security;
        return this;
    }
}