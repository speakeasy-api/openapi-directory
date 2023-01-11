package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesListRequest {
    public DatafusionProjectsLocationsInstancesListPathParams pathParams;
    public DatafusionProjectsLocationsInstancesListRequest withPathParams(DatafusionProjectsLocationsInstancesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesListQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesListRequest withQueryParams(DatafusionProjectsLocationsInstancesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesListSecurity security;
    public DatafusionProjectsLocationsInstancesListRequest withSecurity(DatafusionProjectsLocationsInstancesListSecurity security) {
        this.security = security;
        return this;
    }
}