package openapisdk.models.operations;



public class SqlBackupRunsGetResponse {
    public openapisdk.models.shared.BackupRun backupRun;
    public SqlBackupRunsGetResponse withBackupRun(openapisdk.models.shared.BackupRun backupRun) {
        this.backupRun = backupRun;
        return this;
    }
    public String contentType;
    public SqlBackupRunsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SqlBackupRunsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}