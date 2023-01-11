package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSinkRequest {
    public String serverURL;
    public CreateSinkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSinkCreateSinkRequest request;
    public CreateSinkRequest withRequest(CreateSinkCreateSinkRequest request) {
        this.request = request;
        return this;
    }
    public CreateSinkSecurity security;
    public CreateSinkRequest withSecurity(CreateSinkSecurity security) {
        this.security = security;
        return this;
    }
}