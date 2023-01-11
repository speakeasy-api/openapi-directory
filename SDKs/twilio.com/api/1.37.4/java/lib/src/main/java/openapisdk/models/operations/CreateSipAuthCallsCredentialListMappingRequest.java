package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipAuthCallsCredentialListMappingRequest {
    public String serverURL;
    public CreateSipAuthCallsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipAuthCallsCredentialListMappingPathParams pathParams;
    public CreateSipAuthCallsCredentialListMappingRequest withPathParams(CreateSipAuthCallsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest request;
    public CreateSipAuthCallsCredentialListMappingRequest withRequest(CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipAuthCallsCredentialListMappingSecurity security;
    public CreateSipAuthCallsCredentialListMappingRequest withSecurity(CreateSipAuthCallsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}