package openapisdk.models.operations;



public class DatafusionProjectsLocationsListRequest {
    public DatafusionProjectsLocationsListPathParams pathParams;
    public DatafusionProjectsLocationsListRequest withPathParams(DatafusionProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsListQueryParams queryParams;
    public DatafusionProjectsLocationsListRequest withQueryParams(DatafusionProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatafusionProjectsLocationsListSecurity security;
    public DatafusionProjectsLocationsListRequest withSecurity(DatafusionProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}