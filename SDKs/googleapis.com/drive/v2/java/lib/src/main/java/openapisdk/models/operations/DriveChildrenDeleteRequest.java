package openapisdk.models.operations;



public class DriveChildrenDeleteRequest {
    public DriveChildrenDeletePathParams pathParams;
    public DriveChildrenDeleteRequest withPathParams(DriveChildrenDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveChildrenDeleteQueryParams queryParams;
    public DriveChildrenDeleteRequest withQueryParams(DriveChildrenDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveChildrenDeleteSecurity security;
    public DriveChildrenDeleteRequest withSecurity(DriveChildrenDeleteSecurity security) {
        this.security = security;
        return this;
    }
}