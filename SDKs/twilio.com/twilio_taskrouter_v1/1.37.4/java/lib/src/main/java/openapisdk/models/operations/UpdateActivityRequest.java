package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActivityRequest {
    public String serverURL;
    public UpdateActivityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateActivityPathParams pathParams;
    public UpdateActivityRequest withPathParams(UpdateActivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateActivityUpdateActivityRequest request;
    public UpdateActivityRequest withRequest(UpdateActivityUpdateActivityRequest request) {
        this.request = request;
        return this;
    }
    public UpdateActivitySecurity security;
    public UpdateActivityRequest withSecurity(UpdateActivitySecurity security) {
        this.security = security;
        return this;
    }
}