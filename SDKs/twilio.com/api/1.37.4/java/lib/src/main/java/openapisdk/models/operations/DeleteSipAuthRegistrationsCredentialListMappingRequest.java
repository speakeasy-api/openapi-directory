package openapisdk.models.operations;



public class DeleteSipAuthRegistrationsCredentialListMappingRequest {
    public String serverURL;
    public DeleteSipAuthRegistrationsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipAuthRegistrationsCredentialListMappingPathParams pathParams;
    public DeleteSipAuthRegistrationsCredentialListMappingRequest withPathParams(DeleteSipAuthRegistrationsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipAuthRegistrationsCredentialListMappingSecurity security;
    public DeleteSipAuthRegistrationsCredentialListMappingRequest withSecurity(DeleteSipAuthRegistrationsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}