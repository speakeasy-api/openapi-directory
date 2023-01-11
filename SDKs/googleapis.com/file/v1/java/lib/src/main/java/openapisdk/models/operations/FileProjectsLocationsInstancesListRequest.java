package openapisdk.models.operations;



public class FileProjectsLocationsInstancesListRequest {
    public FileProjectsLocationsInstancesListPathParams pathParams;
    public FileProjectsLocationsInstancesListRequest withPathParams(FileProjectsLocationsInstancesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsInstancesListQueryParams queryParams;
    public FileProjectsLocationsInstancesListRequest withQueryParams(FileProjectsLocationsInstancesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FileProjectsLocationsInstancesListSecurity security;
    public FileProjectsLocationsInstancesListRequest withSecurity(FileProjectsLocationsInstancesListSecurity security) {
        this.security = security;
        return this;
    }
}