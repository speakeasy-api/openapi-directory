package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsClustersDiagnoseRequest {
    public DataprocProjectsRegionsClustersDiagnosePathParams pathParams;
    public DataprocProjectsRegionsClustersDiagnoseRequest withPathParams(DataprocProjectsRegionsClustersDiagnosePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsClustersDiagnoseQueryParams queryParams;
    public DataprocProjectsRegionsClustersDiagnoseRequest withQueryParams(DataprocProjectsRegionsClustersDiagnoseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DataprocProjectsRegionsClustersDiagnoseRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsClustersDiagnoseSecurity security;
    public DataprocProjectsRegionsClustersDiagnoseRequest withSecurity(DataprocProjectsRegionsClustersDiagnoseSecurity security) {
        this.security = security;
        return this;
    }
}