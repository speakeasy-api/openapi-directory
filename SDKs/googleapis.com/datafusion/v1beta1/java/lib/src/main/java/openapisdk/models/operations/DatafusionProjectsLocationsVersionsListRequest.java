package openapisdk.models.operations;



public class DatafusionProjectsLocationsVersionsListRequest {
    public DatafusionProjectsLocationsVersionsListPathParams pathParams;
    public DatafusionProjectsLocationsVersionsListRequest withPathParams(DatafusionProjectsLocationsVersionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsVersionsListQueryParams queryParams;
    public DatafusionProjectsLocationsVersionsListRequest withQueryParams(DatafusionProjectsLocationsVersionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatafusionProjectsLocationsVersionsListSecurity security;
    public DatafusionProjectsLocationsVersionsListRequest withSecurity(DatafusionProjectsLocationsVersionsListSecurity security) {
        this.security = security;
        return this;
    }
}