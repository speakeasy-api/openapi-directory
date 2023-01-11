package openapisdk.models.operations;



public class JobsProjectsOperationsGetRequest {
    public JobsProjectsOperationsGetPathParams pathParams;
    public JobsProjectsOperationsGetRequest withPathParams(JobsProjectsOperationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobsProjectsOperationsGetQueryParams queryParams;
    public JobsProjectsOperationsGetRequest withQueryParams(JobsProjectsOperationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobsProjectsOperationsGetSecurity security;
    public JobsProjectsOperationsGetRequest withSecurity(JobsProjectsOperationsGetSecurity security) {
        this.security = security;
        return this;
    }
}