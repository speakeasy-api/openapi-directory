package openapisdk.models.operations;



public class DriveCommentsGetRequest {
    public DriveCommentsGetPathParams pathParams;
    public DriveCommentsGetRequest withPathParams(DriveCommentsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveCommentsGetQueryParams queryParams;
    public DriveCommentsGetRequest withQueryParams(DriveCommentsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveCommentsGetSecurity security;
    public DriveCommentsGetRequest withSecurity(DriveCommentsGetSecurity security) {
        this.security = security;
        return this;
    }
}