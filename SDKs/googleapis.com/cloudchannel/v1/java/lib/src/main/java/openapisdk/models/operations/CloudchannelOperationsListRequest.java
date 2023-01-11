package openapisdk.models.operations;



public class CloudchannelOperationsListRequest {
    public CloudchannelOperationsListPathParams pathParams;
    public CloudchannelOperationsListRequest withPathParams(CloudchannelOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelOperationsListQueryParams queryParams;
    public CloudchannelOperationsListRequest withQueryParams(CloudchannelOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudchannelOperationsListSecurity security;
    public CloudchannelOperationsListRequest withSecurity(CloudchannelOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}