package openapisdk.models.operations;



public class GkebackupProjectsLocationsBackupPlansListResponse {
    public String contentType;
    public GkebackupProjectsLocationsBackupPlansListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBackupPlansResponse listBackupPlansResponse;
    public GkebackupProjectsLocationsBackupPlansListResponse withListBackupPlansResponse(openapisdk.models.shared.ListBackupPlansResponse listBackupPlansResponse) {
        this.listBackupPlansResponse = listBackupPlansResponse;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsBackupPlansListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}