package openapisdk.models.operations;



public class FetchSipIpAccessControlListMappingRequest {
    public String serverURL;
    public FetchSipIpAccessControlListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipIpAccessControlListMappingPathParams pathParams;
    public FetchSipIpAccessControlListMappingRequest withPathParams(FetchSipIpAccessControlListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipIpAccessControlListMappingSecurity security;
    public FetchSipIpAccessControlListMappingRequest withSecurity(FetchSipIpAccessControlListMappingSecurity security) {
        this.security = security;
        return this;
    }
}