package openapisdk.models.operations;



public class DriveCommentsDeleteRequest {
    public DriveCommentsDeletePathParams pathParams;
    public DriveCommentsDeleteRequest withPathParams(DriveCommentsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveCommentsDeleteQueryParams queryParams;
    public DriveCommentsDeleteRequest withQueryParams(DriveCommentsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveCommentsDeleteSecurity security;
    public DriveCommentsDeleteRequest withSecurity(DriveCommentsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}