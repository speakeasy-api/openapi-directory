package openapisdk.models.operations;



public class DatafusionProjectsLocationsOperationsListRequest {
    public DatafusionProjectsLocationsOperationsListPathParams pathParams;
    public DatafusionProjectsLocationsOperationsListRequest withPathParams(DatafusionProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsOperationsListQueryParams queryParams;
    public DatafusionProjectsLocationsOperationsListRequest withQueryParams(DatafusionProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatafusionProjectsLocationsOperationsListSecurity security;
    public DatafusionProjectsLocationsOperationsListRequest withSecurity(DatafusionProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}