package openapisdk.models.operations;



public class DeleteIpAccessControlListRequest {
    public String serverURL;
    public DeleteIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteIpAccessControlListPathParams pathParams;
    public DeleteIpAccessControlListRequest withPathParams(DeleteIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIpAccessControlListSecurity security;
    public DeleteIpAccessControlListRequest withSecurity(DeleteIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}