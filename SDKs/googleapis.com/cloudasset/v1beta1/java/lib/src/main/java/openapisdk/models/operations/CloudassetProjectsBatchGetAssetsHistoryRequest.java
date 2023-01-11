package openapisdk.models.operations;



public class CloudassetProjectsBatchGetAssetsHistoryRequest {
    public CloudassetProjectsBatchGetAssetsHistoryPathParams pathParams;
    public CloudassetProjectsBatchGetAssetsHistoryRequest withPathParams(CloudassetProjectsBatchGetAssetsHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams queryParams;
    public CloudassetProjectsBatchGetAssetsHistoryRequest withQueryParams(CloudassetProjectsBatchGetAssetsHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudassetProjectsBatchGetAssetsHistorySecurity security;
    public CloudassetProjectsBatchGetAssetsHistoryRequest withSecurity(CloudassetProjectsBatchGetAssetsHistorySecurity security) {
        this.security = security;
        return this;
    }
}