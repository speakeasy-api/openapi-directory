package openapisdk.models.operations;



public class OrgsGetAuditLogResponse {
    public String contentType;
    public OrgsGetAuditLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsGetAuditLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuditLogEvent[] auditLogEvents;
    public OrgsGetAuditLogResponse withAuditLogEvents(openapisdk.models.shared.AuditLogEvent[] auditLogEvents) {
        this.auditLogEvents = auditLogEvents;
        return this;
    }
}