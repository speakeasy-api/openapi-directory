package openapisdk.models.operations;



public class ResetApiKeyFromGroupQuotasResponse {
    public String contentType;
    public ResetApiKeyFromGroupQuotasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Quotas quotas;
    public ResetApiKeyFromGroupQuotasResponse withQuotas(openapisdk.models.shared.Quotas quotas) {
        this.quotas = quotas;
        return this;
    }
    public Long statusCode;
    public ResetApiKeyFromGroupQuotasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}