package openapisdk.models.operations;



public class DriveChangesListRequest {
    public DriveChangesListQueryParams queryParams;
    public DriveChangesListRequest withQueryParams(DriveChangesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveChangesListSecurity security;
    public DriveChangesListRequest withSecurity(DriveChangesListSecurity security) {
        this.security = security;
        return this;
    }
}