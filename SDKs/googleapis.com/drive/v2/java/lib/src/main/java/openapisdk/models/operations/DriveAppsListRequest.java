package openapisdk.models.operations;



public class DriveAppsListRequest {
    public DriveAppsListQueryParams queryParams;
    public DriveAppsListRequest withQueryParams(DriveAppsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveAppsListSecurity security;
    public DriveAppsListRequest withSecurity(DriveAppsListSecurity security) {
        this.security = security;
        return this;
    }
}