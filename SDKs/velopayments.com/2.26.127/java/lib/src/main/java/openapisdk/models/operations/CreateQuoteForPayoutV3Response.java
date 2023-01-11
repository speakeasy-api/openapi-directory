package openapisdk.models.operations;



public class CreateQuoteForPayoutV3Response {
    public String contentType;
    public CreateQuoteForPayoutV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QuoteResponseV3 quoteResponseV3;
    public CreateQuoteForPayoutV3Response withQuoteResponseV3(openapisdk.models.shared.QuoteResponseV3 quoteResponseV3) {
        this.quoteResponseV3 = quoteResponseV3;
        return this;
    }
    public Long statusCode;
    public CreateQuoteForPayoutV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse404;
    public CreateQuoteForPayoutV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
    public Object inlineResponse409;
    public CreateQuoteForPayoutV3Response withInlineResponse409(Object inlineResponse409) {
        this.inlineResponse409 = inlineResponse409;
        return this;
    }
}