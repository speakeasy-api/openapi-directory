package openapisdk.models.operations;



public class ListSipCredentialListMappingRequest {
    public String serverURL;
    public ListSipCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipCredentialListMappingPathParams pathParams;
    public ListSipCredentialListMappingRequest withPathParams(ListSipCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipCredentialListMappingQueryParams queryParams;
    public ListSipCredentialListMappingRequest withQueryParams(ListSipCredentialListMappingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipCredentialListMappingSecurity security;
    public ListSipCredentialListMappingRequest withSecurity(ListSipCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}