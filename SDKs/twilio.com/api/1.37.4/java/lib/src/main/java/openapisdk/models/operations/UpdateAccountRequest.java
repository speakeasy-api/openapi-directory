package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountRequest {
    public String serverURL;
    public UpdateAccountRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateAccountPathParams pathParams;
    public UpdateAccountRequest withPathParams(UpdateAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateAccountUpdateAccountRequest request;
    public UpdateAccountRequest withRequest(UpdateAccountUpdateAccountRequest request) {
        this.request = request;
        return this;
    }
    public UpdateAccountSecurity security;
    public UpdateAccountRequest withSecurity(UpdateAccountSecurity security) {
        this.security = security;
        return this;
    }
}