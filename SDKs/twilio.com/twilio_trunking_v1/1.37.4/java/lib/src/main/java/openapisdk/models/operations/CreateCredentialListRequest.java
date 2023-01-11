package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialListRequest {
    public String serverURL;
    public CreateCredentialListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateCredentialListPathParams pathParams;
    public CreateCredentialListRequest withPathParams(CreateCredentialListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCredentialListCreateCredentialListRequest request;
    public CreateCredentialListRequest withRequest(CreateCredentialListCreateCredentialListRequest request) {
        this.request = request;
        return this;
    }
    public CreateCredentialListSecurity security;
    public CreateCredentialListRequest withSecurity(CreateCredentialListSecurity security) {
        this.security = security;
        return this;
    }
}