package openapisdk.models.operations;



public class DriveParentsDeleteRequest {
    public DriveParentsDeletePathParams pathParams;
    public DriveParentsDeleteRequest withPathParams(DriveParentsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveParentsDeleteQueryParams queryParams;
    public DriveParentsDeleteRequest withQueryParams(DriveParentsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveParentsDeleteSecurity security;
    public DriveParentsDeleteRequest withSecurity(DriveParentsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}