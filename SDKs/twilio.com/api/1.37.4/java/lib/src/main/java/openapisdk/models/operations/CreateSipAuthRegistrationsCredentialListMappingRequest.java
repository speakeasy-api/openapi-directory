package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipAuthRegistrationsCredentialListMappingRequest {
    public String serverURL;
    public CreateSipAuthRegistrationsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipAuthRegistrationsCredentialListMappingPathParams pathParams;
    public CreateSipAuthRegistrationsCredentialListMappingRequest withPathParams(CreateSipAuthRegistrationsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest request;
    public CreateSipAuthRegistrationsCredentialListMappingRequest withRequest(CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipAuthRegistrationsCredentialListMappingSecurity security;
    public CreateSipAuthRegistrationsCredentialListMappingRequest withSecurity(CreateSipAuthRegistrationsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}