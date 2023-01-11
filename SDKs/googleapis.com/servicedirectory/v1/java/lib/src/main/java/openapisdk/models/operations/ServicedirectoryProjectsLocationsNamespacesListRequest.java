package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesListRequest {
    public ServicedirectoryProjectsLocationsNamespacesListPathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesListRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesListQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesListRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesListSecurity security;
    public ServicedirectoryProjectsLocationsNamespacesListRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesListSecurity security) {
        this.security = security;
        return this;
    }
}