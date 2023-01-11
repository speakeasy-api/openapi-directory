package openapisdk.models.operations;



public class DriveRepliesDeleteRequest {
    public DriveRepliesDeletePathParams pathParams;
    public DriveRepliesDeleteRequest withPathParams(DriveRepliesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRepliesDeleteQueryParams queryParams;
    public DriveRepliesDeleteRequest withQueryParams(DriveRepliesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveRepliesDeleteSecurity security;
    public DriveRepliesDeleteRequest withSecurity(DriveRepliesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}