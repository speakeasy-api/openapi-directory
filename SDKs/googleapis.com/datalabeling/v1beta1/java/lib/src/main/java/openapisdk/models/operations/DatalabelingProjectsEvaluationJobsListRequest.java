package openapisdk.models.operations;



public class DatalabelingProjectsEvaluationJobsListRequest {
    public DatalabelingProjectsEvaluationJobsListPathParams pathParams;
    public DatalabelingProjectsEvaluationJobsListRequest withPathParams(DatalabelingProjectsEvaluationJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsListQueryParams queryParams;
    public DatalabelingProjectsEvaluationJobsListRequest withQueryParams(DatalabelingProjectsEvaluationJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsEvaluationJobsListSecurity security;
    public DatalabelingProjectsEvaluationJobsListRequest withSecurity(DatalabelingProjectsEvaluationJobsListSecurity security) {
        this.security = security;
        return this;
    }
}