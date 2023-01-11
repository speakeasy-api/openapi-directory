package openapisdk.models.operations;



public class FetchSipAuthCallsIpAccessControlListMappingRequest {
    public String serverURL;
    public FetchSipAuthCallsIpAccessControlListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSipAuthCallsIpAccessControlListMappingPathParams pathParams;
    public FetchSipAuthCallsIpAccessControlListMappingRequest withPathParams(FetchSipAuthCallsIpAccessControlListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSipAuthCallsIpAccessControlListMappingSecurity security;
    public FetchSipAuthCallsIpAccessControlListMappingRequest withSecurity(FetchSipAuthCallsIpAccessControlListMappingSecurity security) {
        this.security = security;
        return this;
    }
}