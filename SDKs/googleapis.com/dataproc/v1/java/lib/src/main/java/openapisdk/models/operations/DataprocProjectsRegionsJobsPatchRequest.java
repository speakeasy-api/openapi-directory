package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsJobsPatchRequest {
    public DataprocProjectsRegionsJobsPatchPathParams pathParams;
    public DataprocProjectsRegionsJobsPatchRequest withPathParams(DataprocProjectsRegionsJobsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsJobsPatchQueryParams queryParams;
    public DataprocProjectsRegionsJobsPatchRequest withQueryParams(DataprocProjectsRegionsJobsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobInput request;
    public DataprocProjectsRegionsJobsPatchRequest withRequest(openapisdk.models.shared.JobInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsJobsPatchSecurity security;
    public DataprocProjectsRegionsJobsPatchRequest withSecurity(DataprocProjectsRegionsJobsPatchSecurity security) {
        this.security = security;
        return this;
    }
}