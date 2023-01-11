package openapisdk.models.operations;



public class NotebooksProjectsLocationsExecutionsListRequest {
    public NotebooksProjectsLocationsExecutionsListPathParams pathParams;
    public NotebooksProjectsLocationsExecutionsListRequest withPathParams(NotebooksProjectsLocationsExecutionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsExecutionsListQueryParams queryParams;
    public NotebooksProjectsLocationsExecutionsListRequest withQueryParams(NotebooksProjectsLocationsExecutionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NotebooksProjectsLocationsExecutionsListSecurity security;
    public NotebooksProjectsLocationsExecutionsListRequest withSecurity(NotebooksProjectsLocationsExecutionsListSecurity security) {
        this.security = security;
        return this;
    }
}