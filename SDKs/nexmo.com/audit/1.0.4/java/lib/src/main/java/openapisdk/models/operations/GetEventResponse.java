package openapisdk.models.operations;



public class GetEventResponse {
    public openapisdk.models.shared.AuditEvent auditEvent;
    public GetEventResponse withAuditEvent(openapisdk.models.shared.AuditEvent auditEvent) {
        this.auditEvent = auditEvent;
        return this;
    }
    public String contentType;
    public GetEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public GetEventResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ErrorUnauthorized errorUnauthorized;
    public GetEventResponse withErrorUnauthorized(openapisdk.models.shared.ErrorUnauthorized errorUnauthorized) {
        this.errorUnauthorized = errorUnauthorized;
        return this;
    }
    public Long statusCode;
    public GetEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}