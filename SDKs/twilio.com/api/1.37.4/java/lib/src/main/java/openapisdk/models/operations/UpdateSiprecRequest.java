package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSiprecRequest {
    public String serverURL;
    public UpdateSiprecRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSiprecPathParams pathParams;
    public UpdateSiprecRequest withPathParams(UpdateSiprecPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSiprecUpdateSiprecRequest request;
    public UpdateSiprecRequest withRequest(UpdateSiprecUpdateSiprecRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSiprecSecurity security;
    public UpdateSiprecRequest withSecurity(UpdateSiprecSecurity security) {
        this.security = security;
        return this;
    }
}