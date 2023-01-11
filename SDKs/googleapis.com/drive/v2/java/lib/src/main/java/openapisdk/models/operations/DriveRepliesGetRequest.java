package openapisdk.models.operations;



public class DriveRepliesGetRequest {
    public DriveRepliesGetPathParams pathParams;
    public DriveRepliesGetRequest withPathParams(DriveRepliesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRepliesGetQueryParams queryParams;
    public DriveRepliesGetRequest withQueryParams(DriveRepliesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveRepliesGetSecurity security;
    public DriveRepliesGetRequest withSecurity(DriveRepliesGetSecurity security) {
        this.security = security;
        return this;
    }
}