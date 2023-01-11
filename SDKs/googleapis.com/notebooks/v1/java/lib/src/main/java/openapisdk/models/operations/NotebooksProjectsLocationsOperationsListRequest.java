package openapisdk.models.operations;



public class NotebooksProjectsLocationsOperationsListRequest {
    public NotebooksProjectsLocationsOperationsListPathParams pathParams;
    public NotebooksProjectsLocationsOperationsListRequest withPathParams(NotebooksProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsOperationsListQueryParams queryParams;
    public NotebooksProjectsLocationsOperationsListRequest withQueryParams(NotebooksProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NotebooksProjectsLocationsOperationsListSecurity security;
    public NotebooksProjectsLocationsOperationsListRequest withSecurity(NotebooksProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}