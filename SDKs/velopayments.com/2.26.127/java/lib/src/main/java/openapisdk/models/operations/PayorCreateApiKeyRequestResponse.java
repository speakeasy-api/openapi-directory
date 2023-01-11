package openapisdk.models.operations;



public class PayorCreateApiKeyRequestResponse {
    public String contentType;
    public PayorCreateApiKeyRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayorCreateApiKeyResponse payorCreateApiKeyResponse;
    public PayorCreateApiKeyRequestResponse withPayorCreateApiKeyResponse(openapisdk.models.shared.PayorCreateApiKeyResponse payorCreateApiKeyResponse) {
        this.payorCreateApiKeyResponse = payorCreateApiKeyResponse;
        return this;
    }
    public Long statusCode;
    public PayorCreateApiKeyRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public PayorCreateApiKeyRequestResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public PayorCreateApiKeyRequestResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public PayorCreateApiKeyRequestResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}