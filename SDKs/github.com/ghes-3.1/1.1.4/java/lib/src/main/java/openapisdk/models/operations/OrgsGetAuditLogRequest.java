package openapisdk.models.operations;



public class OrgsGetAuditLogRequest {
    public OrgsGetAuditLogPathParams pathParams;
    public OrgsGetAuditLogRequest withPathParams(OrgsGetAuditLogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgsGetAuditLogQueryParams queryParams;
    public OrgsGetAuditLogRequest withQueryParams(OrgsGetAuditLogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}