package openapisdk.models.operations;



public class FileProjectsLocationsOperationsGetRequest {
    public FileProjectsLocationsOperationsGetPathParams pathParams;
    public FileProjectsLocationsOperationsGetRequest withPathParams(FileProjectsLocationsOperationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsOperationsGetQueryParams queryParams;
    public FileProjectsLocationsOperationsGetRequest withQueryParams(FileProjectsLocationsOperationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FileProjectsLocationsOperationsGetSecurity security;
    public FileProjectsLocationsOperationsGetRequest withSecurity(FileProjectsLocationsOperationsGetSecurity security) {
        this.security = security;
        return this;
    }
}