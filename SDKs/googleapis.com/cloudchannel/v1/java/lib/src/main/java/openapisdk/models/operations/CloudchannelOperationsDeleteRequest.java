package openapisdk.models.operations;



public class CloudchannelOperationsDeleteRequest {
    public CloudchannelOperationsDeletePathParams pathParams;
    public CloudchannelOperationsDeleteRequest withPathParams(CloudchannelOperationsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelOperationsDeleteQueryParams queryParams;
    public CloudchannelOperationsDeleteRequest withQueryParams(CloudchannelOperationsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudchannelOperationsDeleteSecurity security;
    public CloudchannelOperationsDeleteRequest withSecurity(CloudchannelOperationsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}