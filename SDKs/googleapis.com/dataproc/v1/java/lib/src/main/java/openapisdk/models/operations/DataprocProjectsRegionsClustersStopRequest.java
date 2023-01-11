package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersStopRequest {
    public DataprocProjectsRegionsClustersStopPathParams pathParams;
    public DataprocProjectsRegionsClustersStopRequest withPathParams(DataprocProjectsRegionsClustersStopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersStopQueryParams queryParams;
    public DataprocProjectsRegionsClustersStopRequest withQueryParams(DataprocProjectsRegionsClustersStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopClusterRequest request;
    public DataprocProjectsRegionsClustersStopRequest withRequest(openapisdk.models.shared.StopClusterRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsClustersStopSecurity security;
    public DataprocProjectsRegionsClustersStopRequest withSecurity(DataprocProjectsRegionsClustersStopSecurity security) {
        this.security = security;
        return this;
    }
}