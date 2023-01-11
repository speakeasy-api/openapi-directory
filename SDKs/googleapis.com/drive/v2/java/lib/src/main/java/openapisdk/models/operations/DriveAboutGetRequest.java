package openapisdk.models.operations;



public class DriveAboutGetRequest {
    public DriveAboutGetQueryParams queryParams;
    public DriveAboutGetRequest withQueryParams(DriveAboutGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveAboutGetSecurity security;
    public DriveAboutGetRequest withSecurity(DriveAboutGetSecurity security) {
        this.security = security;
        return this;
    }
}