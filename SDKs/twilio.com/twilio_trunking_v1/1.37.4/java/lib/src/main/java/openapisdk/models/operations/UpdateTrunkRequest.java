package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrunkRequest {
    public String serverURL;
    public UpdateTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTrunkPathParams pathParams;
    public UpdateTrunkRequest withPathParams(UpdateTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTrunkUpdateTrunkRequest request;
    public UpdateTrunkRequest withRequest(UpdateTrunkUpdateTrunkRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTrunkSecurity security;
    public UpdateTrunkRequest withSecurity(UpdateTrunkSecurity security) {
        this.security = security;
        return this;
    }
}