package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersCreateRequest {
    public DataprocProjectsRegionsClustersCreatePathParams pathParams;
    public DataprocProjectsRegionsClustersCreateRequest withPathParams(DataprocProjectsRegionsClustersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersCreateQueryParams queryParams;
    public DataprocProjectsRegionsClustersCreateRequest withQueryParams(DataprocProjectsRegionsClustersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterInput request;
    public DataprocProjectsRegionsClustersCreateRequest withRequest(openapisdk.models.shared.ClusterInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsClustersCreateSecurity security;
    public DataprocProjectsRegionsClustersCreateRequest withSecurity(DataprocProjectsRegionsClustersCreateSecurity security) {
        this.security = security;
        return this;
    }
}