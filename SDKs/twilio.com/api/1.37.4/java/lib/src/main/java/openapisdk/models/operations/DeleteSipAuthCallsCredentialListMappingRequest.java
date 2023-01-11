package openapisdk.models.operations;



public class DeleteSipAuthCallsCredentialListMappingRequest {
    public String serverURL;
    public DeleteSipAuthCallsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipAuthCallsCredentialListMappingPathParams pathParams;
    public DeleteSipAuthCallsCredentialListMappingRequest withPathParams(DeleteSipAuthCallsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipAuthCallsCredentialListMappingSecurity security;
    public DeleteSipAuthCallsCredentialListMappingRequest withSecurity(DeleteSipAuthCallsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}