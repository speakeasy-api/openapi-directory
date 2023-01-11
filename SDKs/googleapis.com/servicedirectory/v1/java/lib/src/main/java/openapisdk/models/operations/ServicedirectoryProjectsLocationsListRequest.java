package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsListRequest {
    public ServicedirectoryProjectsLocationsListPathParams pathParams;
    public ServicedirectoryProjectsLocationsListRequest withPathParams(ServicedirectoryProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsListQueryParams queryParams;
    public ServicedirectoryProjectsLocationsListRequest withQueryParams(ServicedirectoryProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsListSecurity security;
    public ServicedirectoryProjectsLocationsListRequest withSecurity(ServicedirectoryProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}