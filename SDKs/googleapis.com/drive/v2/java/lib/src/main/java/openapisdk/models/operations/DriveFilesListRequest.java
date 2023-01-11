package openapisdk.models.operations;



public class DriveFilesListRequest {
    public DriveFilesListQueryParams queryParams;
    public DriveFilesListRequest withQueryParams(DriveFilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesListSecurity security;
    public DriveFilesListRequest withSecurity(DriveFilesListSecurity security) {
        this.security = security;
        return this;
    }
}