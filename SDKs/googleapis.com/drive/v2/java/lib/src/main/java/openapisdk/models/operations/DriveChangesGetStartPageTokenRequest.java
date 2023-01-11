package openapisdk.models.operations;



public class DriveChangesGetStartPageTokenRequest {
    public DriveChangesGetStartPageTokenQueryParams queryParams;
    public DriveChangesGetStartPageTokenRequest withQueryParams(DriveChangesGetStartPageTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveChangesGetStartPageTokenSecurity security;
    public DriveChangesGetStartPageTokenRequest withSecurity(DriveChangesGetStartPageTokenSecurity security) {
        this.security = security;
        return this;
    }
}