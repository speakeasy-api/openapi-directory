package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFleetRequest {
    public String serverURL;
    public CreateFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateFleetCreateFleetRequest request;
    public CreateFleetRequest withRequest(CreateFleetCreateFleetRequest request) {
        this.request = request;
        return this;
    }
    public CreateFleetSecurity security;
    public CreateFleetRequest withSecurity(CreateFleetSecurity security) {
        this.security = security;
        return this;
    }
}