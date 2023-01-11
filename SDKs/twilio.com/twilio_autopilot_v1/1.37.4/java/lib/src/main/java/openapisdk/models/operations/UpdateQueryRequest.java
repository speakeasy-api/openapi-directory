package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateQueryRequest {
    public String serverURL;
    public UpdateQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateQueryPathParams pathParams;
    public UpdateQueryRequest withPathParams(UpdateQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateQueryUpdateQueryRequest request;
    public UpdateQueryRequest withRequest(UpdateQueryUpdateQueryRequest request) {
        this.request = request;
        return this;
    }
    public UpdateQuerySecurity security;
    public UpdateQueryRequest withSecurity(UpdateQuerySecurity security) {
        this.security = security;
        return this;
    }
}