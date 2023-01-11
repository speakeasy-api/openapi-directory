package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipCredentialListMappingRequest {
    public String serverURL;
    public CreateSipCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipCredentialListMappingPathParams pathParams;
    public CreateSipCredentialListMappingRequest withPathParams(CreateSipCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipCredentialListMappingCreateSipCredentialListMappingRequest request;
    public CreateSipCredentialListMappingRequest withRequest(CreateSipCredentialListMappingCreateSipCredentialListMappingRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipCredentialListMappingSecurity security;
    public CreateSipCredentialListMappingRequest withSecurity(CreateSipCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}