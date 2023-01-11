package openapisdk.models.operations;



public class GetEventsResponse {
    public openapisdk.models.shared.AuditResp auditResp;
    public GetEventsResponse withAuditResp(openapisdk.models.shared.AuditResp auditResp) {
        this.auditResp = auditResp;
        return this;
    }
    public String contentType;
    public GetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorForbidden errorForbidden;
    public GetEventsResponse withErrorForbidden(openapisdk.models.shared.ErrorForbidden errorForbidden) {
        this.errorForbidden = errorForbidden;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public GetEventsResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ErrorUnauthorized errorUnauthorized;
    public GetEventsResponse withErrorUnauthorized(openapisdk.models.shared.ErrorUnauthorized errorUnauthorized) {
        this.errorUnauthorized = errorUnauthorized;
        return this;
    }
    public Long statusCode;
    public GetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}