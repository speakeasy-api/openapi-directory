package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsEvaluationJobsResumeRequest {
    public DatalabelingProjectsEvaluationJobsResumePathParams pathParams;
    public DatalabelingProjectsEvaluationJobsResumeRequest withPathParams(DatalabelingProjectsEvaluationJobsResumePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsResumeQueryParams queryParams;
    public DatalabelingProjectsEvaluationJobsResumeRequest withQueryParams(DatalabelingProjectsEvaluationJobsResumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatalabelingProjectsEvaluationJobsResumeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsResumeSecurity security;
    public DatalabelingProjectsEvaluationJobsResumeRequest withSecurity(DatalabelingProjectsEvaluationJobsResumeSecurity security) {
        this.security = security;
        return this;
    }
}