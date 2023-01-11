package openapisdk.models.operations;



public class DriveDrivesUnhideRequest {
    public DriveDrivesUnhidePathParams pathParams;
    public DriveDrivesUnhideRequest withPathParams(DriveDrivesUnhidePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveDrivesUnhideQueryParams queryParams;
    public DriveDrivesUnhideRequest withQueryParams(DriveDrivesUnhideQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveDrivesUnhideSecurity security;
    public DriveDrivesUnhideRequest withSecurity(DriveDrivesUnhideSecurity security) {
        this.security = security;
        return this;
    }
}