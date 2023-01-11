package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSimRequest {
    public String serverURL;
    public CreateSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSimCreateSimRequest request;
    public CreateSimRequest withRequest(CreateSimCreateSimRequest request) {
        this.request = request;
        return this;
    }
    public CreateSimSecurity security;
    public CreateSimRequest withSecurity(CreateSimSecurity security) {
        this.security = security;
        return this;
    }
}