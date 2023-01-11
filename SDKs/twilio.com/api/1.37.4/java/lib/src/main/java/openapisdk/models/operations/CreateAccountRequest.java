package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountRequest {
    public String serverURL;
    public CreateAccountRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateAccountCreateAccountRequest request;
    public CreateAccountRequest withRequest(CreateAccountCreateAccountRequest request) {
        this.request = request;
        return this;
    }
    public CreateAccountSecurity security;
    public CreateAccountRequest withSecurity(CreateAccountSecurity security) {
        this.security = security;
        return this;
    }
}