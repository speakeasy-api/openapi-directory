package openapisdk.models.operations;



public class ListIpAccessControlListRequest {
    public String serverURL;
    public ListIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIpAccessControlListPathParams pathParams;
    public ListIpAccessControlListRequest withPathParams(ListIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListIpAccessControlListQueryParams queryParams;
    public ListIpAccessControlListRequest withQueryParams(ListIpAccessControlListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIpAccessControlListSecurity security;
    public ListIpAccessControlListRequest withSecurity(ListIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}