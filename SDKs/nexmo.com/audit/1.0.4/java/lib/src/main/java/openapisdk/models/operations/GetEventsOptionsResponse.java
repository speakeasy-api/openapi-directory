package openapisdk.models.operations;



public class GetEventsOptionsResponse {
    public openapisdk.models.shared.AuditEventTypesResp auditEventTypesResp;
    public GetEventsOptionsResponse withAuditEventTypesResp(openapisdk.models.shared.AuditEventTypesResp auditEventTypesResp) {
        this.auditEventTypesResp = auditEventTypesResp;
        return this;
    }
    public String contentType;
    public GetEventsOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorForbidden errorForbidden;
    public GetEventsOptionsResponse withErrorForbidden(openapisdk.models.shared.ErrorForbidden errorForbidden) {
        this.errorForbidden = errorForbidden;
        return this;
    }
    public openapisdk.models.shared.ErrorUnauthorized errorUnauthorized;
    public GetEventsOptionsResponse withErrorUnauthorized(openapisdk.models.shared.ErrorUnauthorized errorUnauthorized) {
        this.errorUnauthorized = errorUnauthorized;
        return this;
    }
    public openapisdk.models.shared.NoContent noContent;
    public GetEventsOptionsResponse withNoContent(openapisdk.models.shared.NoContent noContent) {
        this.noContent = noContent;
        return this;
    }
    public Long statusCode;
    public GetEventsOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}