package openapisdk.models.operations;



public class DataprocProjectsRegionsClustersListRequest {
    public DataprocProjectsRegionsClustersListPathParams pathParams;
    public DataprocProjectsRegionsClustersListRequest withPathParams(DataprocProjectsRegionsClustersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersListQueryParams queryParams;
    public DataprocProjectsRegionsClustersListRequest withQueryParams(DataprocProjectsRegionsClustersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DataprocProjectsRegionsClustersListSecurity security;
    public DataprocProjectsRegionsClustersListRequest withSecurity(DataprocProjectsRegionsClustersListSecurity security) {
        this.security = security;
        return this;
    }
}