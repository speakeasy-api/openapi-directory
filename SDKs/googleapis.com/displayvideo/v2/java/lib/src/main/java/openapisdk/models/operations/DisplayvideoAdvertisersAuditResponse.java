package openapisdk.models.operations;



public class DisplayvideoAdvertisersAuditResponse {
    public openapisdk.models.shared.AuditAdvertiserResponse auditAdvertiserResponse;
    public DisplayvideoAdvertisersAuditResponse withAuditAdvertiserResponse(openapisdk.models.shared.AuditAdvertiserResponse auditAdvertiserResponse) {
        this.auditAdvertiserResponse = auditAdvertiserResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersAuditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersAuditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}