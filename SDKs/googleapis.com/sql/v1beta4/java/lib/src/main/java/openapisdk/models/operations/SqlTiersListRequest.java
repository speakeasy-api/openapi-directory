package openapisdk.models.operations;



public class SqlTiersListRequest {
    public SqlTiersListPathParams pathParams;
    public SqlTiersListRequest withPathParams(SqlTiersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlTiersListQueryParams queryParams;
    public SqlTiersListRequest withQueryParams(SqlTiersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlTiersListSecurity security;
    public SqlTiersListRequest withSecurity(SqlTiersListSecurity security) {
        this.security = security;
        return this;
    }
}