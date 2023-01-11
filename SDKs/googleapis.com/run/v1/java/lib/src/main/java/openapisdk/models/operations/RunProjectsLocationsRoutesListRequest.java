package openapisdk.models.operations;



public class RunProjectsLocationsRoutesListRequest {
    public RunProjectsLocationsRoutesListPathParams pathParams;
    public RunProjectsLocationsRoutesListRequest withPathParams(RunProjectsLocationsRoutesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsRoutesListQueryParams queryParams;
    public RunProjectsLocationsRoutesListRequest withQueryParams(RunProjectsLocationsRoutesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunProjectsLocationsRoutesListSecurity security;
    public RunProjectsLocationsRoutesListRequest withSecurity(RunProjectsLocationsRoutesListSecurity security) {
        this.security = security;
        return this;
    }
}