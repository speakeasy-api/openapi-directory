package openapisdk.models.operations;



public class ListSipAuthCallsCredentialListMappingRequest {
    public String serverURL;
    public ListSipAuthCallsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipAuthCallsCredentialListMappingPathParams pathParams;
    public ListSipAuthCallsCredentialListMappingRequest withPathParams(ListSipAuthCallsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipAuthCallsCredentialListMappingQueryParams queryParams;
    public ListSipAuthCallsCredentialListMappingRequest withQueryParams(ListSipAuthCallsCredentialListMappingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipAuthCallsCredentialListMappingSecurity security;
    public ListSipAuthCallsCredentialListMappingRequest withSecurity(ListSipAuthCallsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}