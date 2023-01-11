package openapisdk.models.operations;



public class ListSipIpAccessControlListMappingRequest {
    public String serverURL;
    public ListSipIpAccessControlListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipIpAccessControlListMappingPathParams pathParams;
    public ListSipIpAccessControlListMappingRequest withPathParams(ListSipIpAccessControlListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipIpAccessControlListMappingQueryParams queryParams;
    public ListSipIpAccessControlListMappingRequest withQueryParams(ListSipIpAccessControlListMappingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipIpAccessControlListMappingSecurity security;
    public ListSipIpAccessControlListMappingRequest withSecurity(ListSipIpAccessControlListMappingSecurity security) {
        this.security = security;
        return this;
    }
}