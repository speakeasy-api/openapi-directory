package openapisdk.models.operations;



public class PayorLinksResponse {
    public String contentType;
    public PayorLinksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayorLinksResponse payorLinksResponse;
    public PayorLinksResponse withPayorLinksResponse(openapisdk.models.shared.PayorLinksResponse payorLinksResponse) {
        this.payorLinksResponse = payorLinksResponse;
        return this;
    }
    public Long statusCode;
    public PayorLinksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public PayorLinksResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public PayorLinksResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public PayorLinksResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}