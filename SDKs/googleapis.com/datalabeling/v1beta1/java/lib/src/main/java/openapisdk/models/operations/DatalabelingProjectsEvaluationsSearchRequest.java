package openapisdk.models.operations;



public class DatalabelingProjectsEvaluationsSearchRequest {
    public DatalabelingProjectsEvaluationsSearchPathParams pathParams;
    public DatalabelingProjectsEvaluationsSearchRequest withPathParams(DatalabelingProjectsEvaluationsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsEvaluationsSearchQueryParams queryParams;
    public DatalabelingProjectsEvaluationsSearchRequest withQueryParams(DatalabelingProjectsEvaluationsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsEvaluationsSearchSecurity security;
    public DatalabelingProjectsEvaluationsSearchRequest withSecurity(DatalabelingProjectsEvaluationsSearchSecurity security) {
        this.security = security;
        return this;
    }
}