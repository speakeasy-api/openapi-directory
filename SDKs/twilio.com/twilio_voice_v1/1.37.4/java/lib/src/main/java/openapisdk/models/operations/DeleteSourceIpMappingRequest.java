package openapisdk.models.operations;



public class DeleteSourceIpMappingRequest {
    public String serverURL;
    public DeleteSourceIpMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSourceIpMappingPathParams pathParams;
    public DeleteSourceIpMappingRequest withPathParams(DeleteSourceIpMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSourceIpMappingSecurity security;
    public DeleteSourceIpMappingRequest withSecurity(DeleteSourceIpMappingSecurity security) {
        this.security = security;
        return this;
    }
}