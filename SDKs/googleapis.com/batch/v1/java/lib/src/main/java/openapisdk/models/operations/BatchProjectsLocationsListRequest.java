package openapisdk.models.operations;



public class BatchProjectsLocationsListRequest {
    public BatchProjectsLocationsListPathParams pathParams;
    public BatchProjectsLocationsListRequest withPathParams(BatchProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsListQueryParams queryParams;
    public BatchProjectsLocationsListRequest withQueryParams(BatchProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BatchProjectsLocationsListSecurity security;
    public BatchProjectsLocationsListRequest withSecurity(BatchProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}