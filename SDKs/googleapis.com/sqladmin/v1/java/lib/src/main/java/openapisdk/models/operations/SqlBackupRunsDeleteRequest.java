package openapisdk.models.operations;



public class SqlBackupRunsDeleteRequest {
    public SqlBackupRunsDeletePathParams pathParams;
    public SqlBackupRunsDeleteRequest withPathParams(SqlBackupRunsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlBackupRunsDeleteQueryParams queryParams;
    public SqlBackupRunsDeleteRequest withQueryParams(SqlBackupRunsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlBackupRunsDeleteSecurity security;
    public SqlBackupRunsDeleteRequest withSecurity(SqlBackupRunsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}