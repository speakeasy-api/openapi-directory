package openapisdk.models.operations;



public class SqlBackupRunsGetRequest {
    public SqlBackupRunsGetPathParams pathParams;
    public SqlBackupRunsGetRequest withPathParams(SqlBackupRunsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlBackupRunsGetQueryParams queryParams;
    public SqlBackupRunsGetRequest withQueryParams(SqlBackupRunsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlBackupRunsGetSecurity security;
    public SqlBackupRunsGetRequest withSecurity(SqlBackupRunsGetSecurity security) {
        this.security = security;
        return this;
    }
}