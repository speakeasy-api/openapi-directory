package openapisdk.models.operations;



public class NotebooksProjectsLocationsSchedulesListRequest {
    public NotebooksProjectsLocationsSchedulesListPathParams pathParams;
    public NotebooksProjectsLocationsSchedulesListRequest withPathParams(NotebooksProjectsLocationsSchedulesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsSchedulesListQueryParams queryParams;
    public NotebooksProjectsLocationsSchedulesListRequest withQueryParams(NotebooksProjectsLocationsSchedulesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public NotebooksProjectsLocationsSchedulesListSecurity security;
    public NotebooksProjectsLocationsSchedulesListRequest withSecurity(NotebooksProjectsLocationsSchedulesListSecurity security) {
        this.security = security;
        return this;
    }
}