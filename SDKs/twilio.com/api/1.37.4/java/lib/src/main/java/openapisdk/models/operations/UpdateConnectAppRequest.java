package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectAppRequest {
    public String serverURL;
    public UpdateConnectAppRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConnectAppPathParams pathParams;
    public UpdateConnectAppRequest withPathParams(UpdateConnectAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConnectAppUpdateConnectAppRequest request;
    public UpdateConnectAppRequest withRequest(UpdateConnectAppUpdateConnectAppRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConnectAppSecurity security;
    public UpdateConnectAppRequest withSecurity(UpdateConnectAppSecurity security) {
        this.security = security;
        return this;
    }
}