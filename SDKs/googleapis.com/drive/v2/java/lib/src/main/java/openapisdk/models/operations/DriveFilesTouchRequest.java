package openapisdk.models.operations;



public class DriveFilesTouchRequest {
    public DriveFilesTouchPathParams pathParams;
    public DriveFilesTouchRequest withPathParams(DriveFilesTouchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesTouchQueryParams queryParams;
    public DriveFilesTouchRequest withQueryParams(DriveFilesTouchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesTouchSecurity security;
    public DriveFilesTouchRequest withSecurity(DriveFilesTouchSecurity security) {
        this.security = security;
        return this;
    }
}