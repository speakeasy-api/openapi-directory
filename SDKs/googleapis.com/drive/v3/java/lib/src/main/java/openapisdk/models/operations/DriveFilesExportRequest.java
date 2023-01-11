package openapisdk.models.operations;



public class DriveFilesExportRequest {
    public DriveFilesExportPathParams pathParams;
    public DriveFilesExportRequest withPathParams(DriveFilesExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesExportQueryParams queryParams;
    public DriveFilesExportRequest withQueryParams(DriveFilesExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesExportSecurity security;
    public DriveFilesExportRequest withSecurity(DriveFilesExportSecurity security) {
        this.security = security;
        return this;
    }
}