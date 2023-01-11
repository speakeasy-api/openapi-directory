package openapisdk.models.operations;



public class DeleteSipAuthCallsIpAccessControlListMappingRequest {
    public String serverURL;
    public DeleteSipAuthCallsIpAccessControlListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSipAuthCallsIpAccessControlListMappingPathParams pathParams;
    public DeleteSipAuthCallsIpAccessControlListMappingRequest withPathParams(DeleteSipAuthCallsIpAccessControlListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSipAuthCallsIpAccessControlListMappingSecurity security;
    public DeleteSipAuthCallsIpAccessControlListMappingRequest withSecurity(DeleteSipAuthCallsIpAccessControlListMappingSecurity security) {
        this.security = security;
        return this;
    }
}