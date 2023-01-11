package openapisdk.models.operations;



public class FetchSourceIpMappingRequest {
    public String serverURL;
    public FetchSourceIpMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSourceIpMappingPathParams pathParams;
    public FetchSourceIpMappingRequest withPathParams(FetchSourceIpMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSourceIpMappingSecurity security;
    public FetchSourceIpMappingRequest withSecurity(FetchSourceIpMappingSecurity security) {
        this.security = security;
        return this;
    }
}