package openapisdk.models.operations;



public class FetchSipIpAccessControlListRequest {
    public String serverURL;
    public FetchSipIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipIpAccessControlListPathParams pathParams;
    public FetchSipIpAccessControlListRequest withPathParams(FetchSipIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipIpAccessControlListSecurity security;
    public FetchSipIpAccessControlListRequest withSecurity(FetchSipIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}