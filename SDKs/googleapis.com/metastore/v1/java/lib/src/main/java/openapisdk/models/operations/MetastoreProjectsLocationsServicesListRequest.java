package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesListRequest {
    public MetastoreProjectsLocationsServicesListPathParams pathParams;
    public MetastoreProjectsLocationsServicesListRequest withPathParams(MetastoreProjectsLocationsServicesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesListQueryParams queryParams;
    public MetastoreProjectsLocationsServicesListRequest withQueryParams(MetastoreProjectsLocationsServicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesListSecurity security;
    public MetastoreProjectsLocationsServicesListRequest withSecurity(MetastoreProjectsLocationsServicesListSecurity security) {
        this.security = security;
        return this;
    }
}