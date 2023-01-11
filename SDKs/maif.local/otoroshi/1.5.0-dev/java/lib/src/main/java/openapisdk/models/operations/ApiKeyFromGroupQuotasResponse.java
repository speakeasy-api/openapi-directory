package openapisdk.models.operations;



public class ApiKeyFromGroupQuotasResponse {
    public String contentType;
    public ApiKeyFromGroupQuotasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Quotas quotas;
    public ApiKeyFromGroupQuotasResponse withQuotas(openapisdk.models.shared.Quotas quotas) {
        this.quotas = quotas;
        return this;
    }
    public Long statusCode;
    public ApiKeyFromGroupQuotasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}