package openapisdk.models.operations;



public class DriveTeamdrivesListRequest {
    public DriveTeamdrivesListQueryParams queryParams;
    public DriveTeamdrivesListRequest withQueryParams(DriveTeamdrivesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveTeamdrivesListSecurity security;
    public DriveTeamdrivesListRequest withSecurity(DriveTeamdrivesListSecurity security) {
        this.security = security;
        return this;
    }
}