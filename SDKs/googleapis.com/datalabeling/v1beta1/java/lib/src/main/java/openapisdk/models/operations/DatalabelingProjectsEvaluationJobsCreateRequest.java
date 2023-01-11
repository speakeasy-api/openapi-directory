package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsEvaluationJobsCreateRequest {
    public DatalabelingProjectsEvaluationJobsCreatePathParams pathParams;
    public DatalabelingProjectsEvaluationJobsCreateRequest withPathParams(DatalabelingProjectsEvaluationJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsCreateQueryParams queryParams;
    public DatalabelingProjectsEvaluationJobsCreateRequest withQueryParams(DatalabelingProjectsEvaluationJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest request;
    public DatalabelingProjectsEvaluationJobsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsCreateSecurity security;
    public DatalabelingProjectsEvaluationJobsCreateRequest withSecurity(DatalabelingProjectsEvaluationJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}