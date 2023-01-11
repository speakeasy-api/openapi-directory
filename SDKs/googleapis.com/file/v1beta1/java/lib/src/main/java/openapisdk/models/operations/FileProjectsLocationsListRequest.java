package openapisdk.models.operations;



public class FileProjectsLocationsListRequest {
    public FileProjectsLocationsListPathParams pathParams;
    public FileProjectsLocationsListRequest withPathParams(FileProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsListQueryParams queryParams;
    public FileProjectsLocationsListRequest withQueryParams(FileProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FileProjectsLocationsListSecurity security;
    public FileProjectsLocationsListRequest withSecurity(FileProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}