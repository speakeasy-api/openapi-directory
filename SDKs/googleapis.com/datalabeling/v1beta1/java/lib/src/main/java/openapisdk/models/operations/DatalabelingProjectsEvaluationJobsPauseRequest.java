package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsEvaluationJobsPauseRequest {
    public DatalabelingProjectsEvaluationJobsPausePathParams pathParams;
    public DatalabelingProjectsEvaluationJobsPauseRequest withPathParams(DatalabelingProjectsEvaluationJobsPausePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsPauseQueryParams queryParams;
    public DatalabelingProjectsEvaluationJobsPauseRequest withQueryParams(DatalabelingProjectsEvaluationJobsPauseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatalabelingProjectsEvaluationJobsPauseRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsPauseSecurity security;
    public DatalabelingProjectsEvaluationJobsPauseRequest withSecurity(DatalabelingProjectsEvaluationJobsPauseSecurity security) {
        this.security = security;
        return this;
    }
}