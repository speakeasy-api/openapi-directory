package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsEvaluationJobsPatchRequest {
    public DatalabelingProjectsEvaluationJobsPatchPathParams pathParams;
    public DatalabelingProjectsEvaluationJobsPatchRequest withPathParams(DatalabelingProjectsEvaluationJobsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsPatchQueryParams queryParams;
    public DatalabelingProjectsEvaluationJobsPatchRequest withQueryParams(DatalabelingProjectsEvaluationJobsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob request;
    public DatalabelingProjectsEvaluationJobsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsPatchSecurity security;
    public DatalabelingProjectsEvaluationJobsPatchRequest withSecurity(DatalabelingProjectsEvaluationJobsPatchSecurity security) {
        this.security = security;
        return this;
    }
}