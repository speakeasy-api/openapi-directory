package openapisdk.models.operations;



public class WorkloadmanagerProjectsLocationsListRequest {
    public WorkloadmanagerProjectsLocationsListPathParams pathParams;
    public WorkloadmanagerProjectsLocationsListRequest withPathParams(WorkloadmanagerProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkloadmanagerProjectsLocationsListQueryParams queryParams;
    public WorkloadmanagerProjectsLocationsListRequest withQueryParams(WorkloadmanagerProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WorkloadmanagerProjectsLocationsListSecurity security;
    public WorkloadmanagerProjectsLocationsListRequest withSecurity(WorkloadmanagerProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}