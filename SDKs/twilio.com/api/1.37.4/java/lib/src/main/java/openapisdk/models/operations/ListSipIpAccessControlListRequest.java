package openapisdk.models.operations;



public class ListSipIpAccessControlListRequest {
    public String serverURL;
    public ListSipIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipIpAccessControlListPathParams pathParams;
    public ListSipIpAccessControlListRequest withPathParams(ListSipIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipIpAccessControlListQueryParams queryParams;
    public ListSipIpAccessControlListRequest withQueryParams(ListSipIpAccessControlListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipIpAccessControlListSecurity security;
    public ListSipIpAccessControlListRequest withSecurity(ListSipIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}