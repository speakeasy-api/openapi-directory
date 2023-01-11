package openapisdk.models.operations;



public class DriveChildrenGetRequest {
    public DriveChildrenGetPathParams pathParams;
    public DriveChildrenGetRequest withPathParams(DriveChildrenGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveChildrenGetQueryParams queryParams;
    public DriveChildrenGetRequest withQueryParams(DriveChildrenGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveChildrenGetSecurity security;
    public DriveChildrenGetRequest withSecurity(DriveChildrenGetSecurity security) {
        this.security = security;
        return this;
    }
}