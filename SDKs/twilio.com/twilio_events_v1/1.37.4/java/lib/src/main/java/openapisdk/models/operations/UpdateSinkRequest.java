package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSinkRequest {
    public String serverURL;
    public UpdateSinkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSinkPathParams pathParams;
    public UpdateSinkRequest withPathParams(UpdateSinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSinkUpdateSinkRequest request;
    public UpdateSinkRequest withRequest(UpdateSinkUpdateSinkRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSinkSecurity security;
    public UpdateSinkRequest withSecurity(UpdateSinkSecurity security) {
        this.security = security;
        return this;
    }
}