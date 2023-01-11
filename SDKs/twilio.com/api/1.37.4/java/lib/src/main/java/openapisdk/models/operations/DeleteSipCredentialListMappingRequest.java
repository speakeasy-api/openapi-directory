package openapisdk.models.operations;



public class DeleteSipCredentialListMappingRequest {
    public String serverURL;
    public DeleteSipCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipCredentialListMappingPathParams pathParams;
    public DeleteSipCredentialListMappingRequest withPathParams(DeleteSipCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipCredentialListMappingSecurity security;
    public DeleteSipCredentialListMappingRequest withSecurity(DeleteSipCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}