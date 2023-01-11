package openapisdk.models.operations;



public class NotebooksProjectsLocationsListRequest {
    public NotebooksProjectsLocationsListPathParams pathParams;
    public NotebooksProjectsLocationsListRequest withPathParams(NotebooksProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsListQueryParams queryParams;
    public NotebooksProjectsLocationsListRequest withQueryParams(NotebooksProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NotebooksProjectsLocationsListSecurity security;
    public NotebooksProjectsLocationsListRequest withSecurity(NotebooksProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}