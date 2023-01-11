package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipCredentialListRequest {
    public String serverURL;
    public CreateSipCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipCredentialListPathParams pathParams;
    public CreateSipCredentialListRequest withPathParams(CreateSipCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipCredentialListCreateSipCredentialListRequest request;
    public CreateSipCredentialListRequest withRequest(CreateSipCredentialListCreateSipCredentialListRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipCredentialListSecurity security;
    public CreateSipCredentialListRequest withSecurity(CreateSipCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}