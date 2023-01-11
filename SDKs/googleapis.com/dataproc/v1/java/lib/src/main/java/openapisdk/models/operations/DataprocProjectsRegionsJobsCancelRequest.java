package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsJobsCancelRequest {
    public DataprocProjectsRegionsJobsCancelPathParams pathParams;
    public DataprocProjectsRegionsJobsCancelRequest withPathParams(DataprocProjectsRegionsJobsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsJobsCancelQueryParams queryParams;
    public DataprocProjectsRegionsJobsCancelRequest withQueryParams(DataprocProjectsRegionsJobsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DataprocProjectsRegionsJobsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsJobsCancelSecurity security;
    public DataprocProjectsRegionsJobsCancelRequest withSecurity(DataprocProjectsRegionsJobsCancelSecurity security) {
        this.security = security;
        return this;
    }
}