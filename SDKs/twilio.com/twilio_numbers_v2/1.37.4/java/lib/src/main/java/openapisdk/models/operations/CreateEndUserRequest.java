package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEndUserRequest {
    public String serverURL;
    public CreateEndUserRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateEndUserCreateEndUserRequest request;
    public CreateEndUserRequest withRequest(CreateEndUserCreateEndUserRequest request) {
        this.request = request;
        return this;
    }
    public CreateEndUserSecurity security;
    public CreateEndUserRequest withSecurity(CreateEndUserSecurity security) {
        this.security = security;
        return this;
    }
}