package openapisdk.models.operations;



public class GetQuoteSearchResponse {
    public String contentType;
    public GetQuoteSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object quoteResponse;
    public GetQuoteSearchResponse withQuoteResponse(Object quoteResponse) {
        this.quoteResponse = quoteResponse;
        return this;
    }
    public Long statusCode;
    public GetQuoteSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}