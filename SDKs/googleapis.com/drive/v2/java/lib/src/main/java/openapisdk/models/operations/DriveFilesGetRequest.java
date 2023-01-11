package openapisdk.models.operations;



public class DriveFilesGetRequest {
    public DriveFilesGetPathParams pathParams;
    public DriveFilesGetRequest withPathParams(DriveFilesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesGetQueryParams queryParams;
    public DriveFilesGetRequest withQueryParams(DriveFilesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesGetSecurity security;
    public DriveFilesGetRequest withSecurity(DriveFilesGetSecurity security) {
        this.security = security;
        return this;
    }
}