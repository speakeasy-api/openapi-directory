package openapisdk.models.operations;



public class FetchSipAuthRegistrationsCredentialListMappingRequest {
    public String serverURL;
    public FetchSipAuthRegistrationsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipAuthRegistrationsCredentialListMappingPathParams pathParams;
    public FetchSipAuthRegistrationsCredentialListMappingRequest withPathParams(FetchSipAuthRegistrationsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipAuthRegistrationsCredentialListMappingSecurity security;
    public FetchSipAuthRegistrationsCredentialListMappingRequest withSecurity(FetchSipAuthRegistrationsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}