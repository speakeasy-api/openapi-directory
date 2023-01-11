package openapisdk.models.operations;



public class FetchSipCredentialListMappingRequest {
    public String serverURL;
    public FetchSipCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipCredentialListMappingPathParams pathParams;
    public FetchSipCredentialListMappingRequest withPathParams(FetchSipCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipCredentialListMappingSecurity security;
    public FetchSipCredentialListMappingRequest withSecurity(FetchSipCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}