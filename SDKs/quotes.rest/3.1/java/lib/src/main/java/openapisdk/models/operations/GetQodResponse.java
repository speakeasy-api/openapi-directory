package openapisdk.models.operations;



public class GetQodResponse {
    public String contentType;
    public GetQodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object quoteResponse;
    public GetQodResponse withQuoteResponse(Object quoteResponse) {
        this.quoteResponse = quoteResponse;
        return this;
    }
    public Long statusCode;
    public GetQodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}