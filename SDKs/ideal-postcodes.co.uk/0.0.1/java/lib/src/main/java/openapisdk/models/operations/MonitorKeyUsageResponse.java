package openapisdk.models.operations;



public class MonitorKeyUsageResponse {
    public String contentType;
    public MonitorKeyUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseSchema errorResponseSchema;
    public MonitorKeyUsageResponse withErrorResponseSchema(openapisdk.models.shared.ErrorResponseSchema errorResponseSchema) {
        this.errorResponseSchema = errorResponseSchema;
        return this;
    }
    public openapisdk.models.shared.KeyUsageResponseSchema keyUsageResponseSchema;
    public MonitorKeyUsageResponse withKeyUsageResponseSchema(openapisdk.models.shared.KeyUsageResponseSchema keyUsageResponseSchema) {
        this.keyUsageResponseSchema = keyUsageResponseSchema;
        return this;
    }
    public Long statusCode;
    public MonitorKeyUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}