package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersPatchRequest {
    public DataprocProjectsRegionsClustersPatchPathParams pathParams;
    public DataprocProjectsRegionsClustersPatchRequest withPathParams(DataprocProjectsRegionsClustersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersPatchQueryParams queryParams;
    public DataprocProjectsRegionsClustersPatchRequest withQueryParams(DataprocProjectsRegionsClustersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterInput request;
    public DataprocProjectsRegionsClustersPatchRequest withRequest(openapisdk.models.shared.ClusterInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsClustersPatchSecurity security;
    public DataprocProjectsRegionsClustersPatchRequest withSecurity(DataprocProjectsRegionsClustersPatchSecurity security) {
        this.security = security;
        return this;
    }
}