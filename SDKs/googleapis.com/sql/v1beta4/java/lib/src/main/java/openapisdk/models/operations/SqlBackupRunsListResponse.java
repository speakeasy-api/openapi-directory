package openapisdk.models.operations;



public class SqlBackupRunsListResponse {
    public openapisdk.models.shared.BackupRunsListResponse backupRunsListResponse;
    public SqlBackupRunsListResponse withBackupRunsListResponse(openapisdk.models.shared.BackupRunsListResponse backupRunsListResponse) {
        this.backupRunsListResponse = backupRunsListResponse;
        return this;
    }
    public String contentType;
    public SqlBackupRunsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SqlBackupRunsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}