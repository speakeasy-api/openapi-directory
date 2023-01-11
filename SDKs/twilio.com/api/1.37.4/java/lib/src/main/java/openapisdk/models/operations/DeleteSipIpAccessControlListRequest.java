package openapisdk.models.operations;



public class DeleteSipIpAccessControlListRequest {
    public String serverURL;
    public DeleteSipIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipIpAccessControlListPathParams pathParams;
    public DeleteSipIpAccessControlListRequest withPathParams(DeleteSipIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipIpAccessControlListSecurity security;
    public DeleteSipIpAccessControlListRequest withSecurity(DeleteSipIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}