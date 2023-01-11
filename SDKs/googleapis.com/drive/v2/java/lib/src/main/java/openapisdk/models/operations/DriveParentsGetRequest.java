package openapisdk.models.operations;



public class DriveParentsGetRequest {
    public DriveParentsGetPathParams pathParams;
    public DriveParentsGetRequest withPathParams(DriveParentsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveParentsGetQueryParams queryParams;
    public DriveParentsGetRequest withQueryParams(DriveParentsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveParentsGetSecurity security;
    public DriveParentsGetRequest withSecurity(DriveParentsGetSecurity security) {
        this.security = security;
        return this;
    }
}