package openapisdk.models.operations;



public class FetchIpAccessControlListRequest {
    public String serverURL;
    public FetchIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchIpAccessControlListPathParams pathParams;
    public FetchIpAccessControlListRequest withPathParams(FetchIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchIpAccessControlListSecurity security;
    public FetchIpAccessControlListRequest withSecurity(FetchIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}