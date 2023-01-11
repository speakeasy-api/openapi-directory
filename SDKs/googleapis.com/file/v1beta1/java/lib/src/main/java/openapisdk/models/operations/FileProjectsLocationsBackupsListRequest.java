package openapisdk.models.operations;



public class FileProjectsLocationsBackupsListRequest {
    public FileProjectsLocationsBackupsListPathParams pathParams;
    public FileProjectsLocationsBackupsListRequest withPathParams(FileProjectsLocationsBackupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileProjectsLocationsBackupsListQueryParams queryParams;
    public FileProjectsLocationsBackupsListRequest withQueryParams(FileProjectsLocationsBackupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FileProjectsLocationsBackupsListSecurity security;
    public FileProjectsLocationsBackupsListRequest withSecurity(FileProjectsLocationsBackupsListSecurity security) {
        this.security = security;
        return this;
    }
}