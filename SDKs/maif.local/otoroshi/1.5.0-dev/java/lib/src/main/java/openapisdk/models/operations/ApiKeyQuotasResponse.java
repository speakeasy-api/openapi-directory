package openapisdk.models.operations;



public class ApiKeyQuotasResponse {
    public String contentType;
    public ApiKeyQuotasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Quotas quotas;
    public ApiKeyQuotasResponse withQuotas(openapisdk.models.shared.Quotas quotas) {
        this.quotas = quotas;
        return this;
    }
    public Long statusCode;
    public ApiKeyQuotasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}