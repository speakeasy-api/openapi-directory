package openapisdk.models.operations;



public class FetchSipAuthCallsCredentialListMappingRequest {
    public String serverURL;
    public FetchSipAuthCallsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipAuthCallsCredentialListMappingPathParams pathParams;
    public FetchSipAuthCallsCredentialListMappingRequest withPathParams(FetchSipAuthCallsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipAuthCallsCredentialListMappingSecurity security;
    public FetchSipAuthCallsCredentialListMappingRequest withSecurity(FetchSipAuthCallsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}