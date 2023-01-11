package openapisdk.models.operations;



public class DriveTeamdrivesGetRequest {
    public DriveTeamdrivesGetPathParams pathParams;
    public DriveTeamdrivesGetRequest withPathParams(DriveTeamdrivesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveTeamdrivesGetQueryParams queryParams;
    public DriveTeamdrivesGetRequest withQueryParams(DriveTeamdrivesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveTeamdrivesGetSecurity security;
    public DriveTeamdrivesGetRequest withSecurity(DriveTeamdrivesGetSecurity security) {
        this.security = security;
        return this;
    }
}