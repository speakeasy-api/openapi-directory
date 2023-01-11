package openapisdk.models.operations;



public class DeleteSipIpAccessControlListMappingRequest {
    public String serverURL;
    public DeleteSipIpAccessControlListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipIpAccessControlListMappingPathParams pathParams;
    public DeleteSipIpAccessControlListMappingRequest withPathParams(DeleteSipIpAccessControlListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipIpAccessControlListMappingSecurity security;
    public DeleteSipIpAccessControlListMappingRequest withSecurity(DeleteSipIpAccessControlListMappingSecurity security) {
        this.security = security;
        return this;
    }
}