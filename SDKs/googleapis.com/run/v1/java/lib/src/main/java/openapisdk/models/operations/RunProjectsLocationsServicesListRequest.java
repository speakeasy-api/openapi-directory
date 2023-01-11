package openapisdk.models.operations;



public class RunProjectsLocationsServicesListRequest {
    public RunProjectsLocationsServicesListPathParams pathParams;
    public RunProjectsLocationsServicesListRequest withPathParams(RunProjectsLocationsServicesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsServicesListQueryParams queryParams;
    public RunProjectsLocationsServicesListRequest withQueryParams(RunProjectsLocationsServicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunProjectsLocationsServicesListSecurity security;
    public RunProjectsLocationsServicesListRequest withSecurity(RunProjectsLocationsServicesListSecurity security) {
        this.security = security;
        return this;
    }
}