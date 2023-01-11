package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpCommandRequest {
    public String serverURL;
    public CreateIpCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIpCommandCreateIpCommandRequest request;
    public CreateIpCommandRequest withRequest(CreateIpCommandCreateIpCommandRequest request) {
        this.request = request;
        return this;
    }
    public CreateIpCommandSecurity security;
    public CreateIpCommandRequest withSecurity(CreateIpCommandSecurity security) {
        this.security = security;
        return this;
    }
}