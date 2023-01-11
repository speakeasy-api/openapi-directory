package openapisdk.models.operations;



public class DriveChildrenListRequest {
    public DriveChildrenListPathParams pathParams;
    public DriveChildrenListRequest withPathParams(DriveChildrenListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveChildrenListQueryParams queryParams;
    public DriveChildrenListRequest withQueryParams(DriveChildrenListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveChildrenListSecurity security;
    public DriveChildrenListRequest withSecurity(DriveChildrenListSecurity security) {
        this.security = security;
        return this;
    }
}