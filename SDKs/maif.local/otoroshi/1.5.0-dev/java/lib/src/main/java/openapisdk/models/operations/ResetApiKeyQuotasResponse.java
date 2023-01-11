package openapisdk.models.operations;



public class ResetApiKeyQuotasResponse {
    public String contentType;
    public ResetApiKeyQuotasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Quotas quotas;
    public ResetApiKeyQuotasResponse withQuotas(openapisdk.models.shared.Quotas quotas) {
        this.quotas = quotas;
        return this;
    }
    public Long statusCode;
    public ResetApiKeyQuotasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}