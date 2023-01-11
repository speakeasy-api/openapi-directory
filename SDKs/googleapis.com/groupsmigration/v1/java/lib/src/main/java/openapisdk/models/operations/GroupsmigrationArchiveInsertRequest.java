package openapisdk.models.operations;



public class GroupsmigrationArchiveInsertRequest {
    public GroupsmigrationArchiveInsertPathParams pathParams;
    public GroupsmigrationArchiveInsertRequest withPathParams(GroupsmigrationArchiveInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsmigrationArchiveInsertQueryParams queryParams;
    public GroupsmigrationArchiveInsertRequest withQueryParams(GroupsmigrationArchiveInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GroupsmigrationArchiveInsertSecurity security;
    public GroupsmigrationArchiveInsertRequest withSecurity(GroupsmigrationArchiveInsertSecurity security) {
        this.security = security;
        return this;
    }
}