package openapisdk.models.operations;



public class CloudbuildProjectsWorkerPoolsListRequest {
    public CloudbuildProjectsWorkerPoolsListPathParams pathParams;
    public CloudbuildProjectsWorkerPoolsListRequest withPathParams(CloudbuildProjectsWorkerPoolsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbuildProjectsWorkerPoolsListQueryParams queryParams;
    public CloudbuildProjectsWorkerPoolsListRequest withQueryParams(CloudbuildProjectsWorkerPoolsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudbuildProjectsWorkerPoolsListSecurity security;
    public CloudbuildProjectsWorkerPoolsListRequest withSecurity(CloudbuildProjectsWorkerPoolsListSecurity security) {
        this.security = security;
        return this;
    }
}