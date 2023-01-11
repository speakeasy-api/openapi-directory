package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetRequest {
    public String serverURL;
    public UpdateFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateFleetPathParams pathParams;
    public UpdateFleetRequest withPathParams(UpdateFleetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateFleetUpdateFleetRequest request;
    public UpdateFleetRequest withRequest(UpdateFleetUpdateFleetRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFleetSecurity security;
    public UpdateFleetRequest withSecurity(UpdateFleetSecurity security) {
        this.security = security;
        return this;
    }
}