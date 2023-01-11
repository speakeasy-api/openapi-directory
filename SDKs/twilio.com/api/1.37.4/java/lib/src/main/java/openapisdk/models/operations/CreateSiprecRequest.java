package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSiprecRequest {
    public String serverURL;
    public CreateSiprecRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSiprecPathParams pathParams;
    public CreateSiprecRequest withPathParams(CreateSiprecPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSiprecCreateSiprecRequest request;
    public CreateSiprecRequest withRequest(CreateSiprecCreateSiprecRequest request) {
        this.request = request;
        return this;
    }
    public CreateSiprecSecurity security;
    public CreateSiprecRequest withSecurity(CreateSiprecSecurity security) {
        this.security = security;
        return this;
    }
}