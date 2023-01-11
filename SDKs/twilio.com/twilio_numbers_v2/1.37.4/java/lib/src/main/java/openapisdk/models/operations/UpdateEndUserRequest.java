package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEndUserRequest {
    public String serverURL;
    public UpdateEndUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateEndUserPathParams pathParams;
    public UpdateEndUserRequest withPathParams(UpdateEndUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateEndUserUpdateEndUserRequest request;
    public UpdateEndUserRequest withRequest(UpdateEndUserUpdateEndUserRequest request) {
        this.request = request;
        return this;
    }
    public UpdateEndUserSecurity security;
    public UpdateEndUserRequest withSecurity(UpdateEndUserSecurity security) {
        this.security = security;
        return this;
    }
}