package openapisdk.models.operations;



public class DriveAppsGetRequest {
    public DriveAppsGetPathParams pathParams;
    public DriveAppsGetRequest withPathParams(DriveAppsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveAppsGetQueryParams queryParams;
    public DriveAppsGetRequest withQueryParams(DriveAppsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveAppsGetSecurity security;
    public DriveAppsGetRequest withSecurity(DriveAppsGetSecurity security) {
        this.security = security;
        return this;
    }
}