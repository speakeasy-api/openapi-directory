package openapisdk.models.operations;



public class SqlFlagsListRequest {
    public SqlFlagsListQueryParams queryParams;
    public SqlFlagsListRequest withQueryParams(SqlFlagsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlFlagsListSecurity security;
    public SqlFlagsListRequest withSecurity(SqlFlagsListSecurity security) {
        this.security = security;
        return this;
    }
}