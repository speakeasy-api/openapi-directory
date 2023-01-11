package openapisdk.models.operations;



public class ContentOrderreturnsGetResponse {
    public String contentType;
    public ContentOrderreturnsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MerchantOrderReturn merchantOrderReturn;
    public ContentOrderreturnsGetResponse withMerchantOrderReturn(openapisdk.models.shared.MerchantOrderReturn merchantOrderReturn) {
        this.merchantOrderReturn = merchantOrderReturn;
        return this;
    }
    public Long statusCode;
    public ContentOrderreturnsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}