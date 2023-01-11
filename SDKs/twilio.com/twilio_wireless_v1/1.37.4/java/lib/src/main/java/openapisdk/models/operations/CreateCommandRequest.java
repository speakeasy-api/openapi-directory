package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCommandRequest {
    public String serverURL;
    public CreateCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCommandCreateCommandRequest request;
    public CreateCommandRequest withRequest(CreateCommandCreateCommandRequest request) {
        this.request = request;
        return this;
    }
    public CreateCommandSecurity security;
    public CreateCommandRequest withSecurity(CreateCommandSecurity security) {
        this.security = security;
        return this;
    }
}