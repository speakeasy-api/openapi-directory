package openapisdk.models.operations;



public class DriveCommentsListRequest {
    public DriveCommentsListPathParams pathParams;
    public DriveCommentsListRequest withPathParams(DriveCommentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveCommentsListQueryParams queryParams;
    public DriveCommentsListRequest withQueryParams(DriveCommentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveCommentsListSecurity security;
    public DriveCommentsListRequest withSecurity(DriveCommentsListSecurity security) {
        this.security = security;
        return this;
    }
}