package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersInjectCredentialsRequest {
    public DataprocProjectsRegionsClustersInjectCredentialsPathParams pathParams;
    public DataprocProjectsRegionsClustersInjectCredentialsRequest withPathParams(DataprocProjectsRegionsClustersInjectCredentialsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersInjectCredentialsQueryParams queryParams;
    public DataprocProjectsRegionsClustersInjectCredentialsRequest withQueryParams(DataprocProjectsRegionsClustersInjectCredentialsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InjectCredentialsRequest request;
    public DataprocProjectsRegionsClustersInjectCredentialsRequest withRequest(openapisdk.models.shared.InjectCredentialsRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsClustersInjectCredentialsSecurity security;
    public DataprocProjectsRegionsClustersInjectCredentialsRequest withSecurity(DataprocProjectsRegionsClustersInjectCredentialsSecurity security) {
        this.security = security;
        return this;
    }
}