package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSmsCommandRequest {
    public String serverURL;
    public CreateSmsCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSmsCommandCreateSmsCommandRequest request;
    public CreateSmsCommandRequest withRequest(CreateSmsCommandCreateSmsCommandRequest request) {
        this.request = request;
        return this;
    }
    public CreateSmsCommandSecurity security;
    public CreateSmsCommandRequest withSecurity(CreateSmsCommandSecurity security) {
        this.security = security;
        return this;
    }
}