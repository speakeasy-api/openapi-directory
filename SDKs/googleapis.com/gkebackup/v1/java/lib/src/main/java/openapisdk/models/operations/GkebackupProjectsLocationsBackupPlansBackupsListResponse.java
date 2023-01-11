package openapisdk.models.operations;



public class GkebackupProjectsLocationsBackupPlansBackupsListResponse {
    public String contentType;
    public GkebackupProjectsLocationsBackupPlansBackupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBackupsResponse listBackupsResponse;
    public GkebackupProjectsLocationsBackupPlansBackupsListResponse withListBackupsResponse(openapisdk.models.shared.ListBackupsResponse listBackupsResponse) {
        this.listBackupsResponse = listBackupsResponse;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsBackupPlansBackupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}