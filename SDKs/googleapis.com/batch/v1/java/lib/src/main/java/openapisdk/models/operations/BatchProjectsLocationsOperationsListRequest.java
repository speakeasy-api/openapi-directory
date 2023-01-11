package openapisdk.models.operations;



public class BatchProjectsLocationsOperationsListRequest {
    public BatchProjectsLocationsOperationsListPathParams pathParams;
    public BatchProjectsLocationsOperationsListRequest withPathParams(BatchProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsOperationsListQueryParams queryParams;
    public BatchProjectsLocationsOperationsListRequest withQueryParams(BatchProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BatchProjectsLocationsOperationsListSecurity security;
    public BatchProjectsLocationsOperationsListRequest withSecurity(BatchProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}