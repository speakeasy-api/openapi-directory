package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateActivityRequest {
    public String serverURL;
    public CreateActivityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateActivityPathParams pathParams;
    public CreateActivityRequest withPathParams(CreateActivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateActivityCreateActivityRequest request;
    public CreateActivityRequest withRequest(CreateActivityCreateActivityRequest request) {
        this.request = request;
        return this;
    }
    public CreateActivitySecurity security;
    public CreateActivityRequest withSecurity(CreateActivitySecurity security) {
        this.security = security;
        return this;
    }
}