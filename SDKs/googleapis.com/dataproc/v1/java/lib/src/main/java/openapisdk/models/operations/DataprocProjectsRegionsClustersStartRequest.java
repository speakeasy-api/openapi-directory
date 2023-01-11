package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersStartRequest {
    public DataprocProjectsRegionsClustersStartPathParams pathParams;
    public DataprocProjectsRegionsClustersStartRequest withPathParams(DataprocProjectsRegionsClustersStartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersStartQueryParams queryParams;
    public DataprocProjectsRegionsClustersStartRequest withQueryParams(DataprocProjectsRegionsClustersStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartClusterRequest request;
    public DataprocProjectsRegionsClustersStartRequest withRequest(openapisdk.models.shared.StartClusterRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsClustersStartSecurity security;
    public DataprocProjectsRegionsClustersStartRequest withSecurity(DataprocProjectsRegionsClustersStartSecurity security) {
        this.security = security;
        return this;
    }
}