package openapisdk.models.operations;



public class ListSipAuthCallsIpAccessControlListMappingRequest {
    public String serverURL;
    public ListSipAuthCallsIpAccessControlListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipAuthCallsIpAccessControlListMappingPathParams pathParams;
    public ListSipAuthCallsIpAccessControlListMappingRequest withPathParams(ListSipAuthCallsIpAccessControlListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipAuthCallsIpAccessControlListMappingQueryParams queryParams;
    public ListSipAuthCallsIpAccessControlListMappingRequest withQueryParams(ListSipAuthCallsIpAccessControlListMappingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipAuthCallsIpAccessControlListMappingSecurity security;
    public ListSipAuthCallsIpAccessControlListMappingRequest withSecurity(ListSipAuthCallsIpAccessControlListMappingSecurity security) {
        this.security = security;
        return this;
    }
}