package openapisdk.models.operations;



public class RunProjectsLocationsRevisionsListRequest {
    public RunProjectsLocationsRevisionsListPathParams pathParams;
    public RunProjectsLocationsRevisionsListRequest withPathParams(RunProjectsLocationsRevisionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsRevisionsListQueryParams queryParams;
    public RunProjectsLocationsRevisionsListRequest withQueryParams(RunProjectsLocationsRevisionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunProjectsLocationsRevisionsListSecurity security;
    public RunProjectsLocationsRevisionsListRequest withSecurity(RunProjectsLocationsRevisionsListSecurity security) {
        this.security = security;
        return this;
    }
}