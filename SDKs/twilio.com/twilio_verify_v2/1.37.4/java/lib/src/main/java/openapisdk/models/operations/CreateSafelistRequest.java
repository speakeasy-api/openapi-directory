package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSafelistRequest {
    public String serverURL;
    public CreateSafelistRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSafelistCreateSafelistRequest request;
    public CreateSafelistRequest withRequest(CreateSafelistCreateSafelistRequest request) {
        this.request = request;
        return this;
    }
    public CreateSafelistSecurity security;
    public CreateSafelistRequest withSecurity(CreateSafelistSecurity security) {
        this.security = security;
        return this;
    }
}