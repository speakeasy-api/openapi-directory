package openapisdk.models.operations;



public class GetSourceAccountResponse {
    public String contentType;
    public GetSourceAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourceAccountResponse sourceAccountResponse;
    public GetSourceAccountResponse withSourceAccountResponse(openapisdk.models.shared.SourceAccountResponse sourceAccountResponse) {
        this.sourceAccountResponse = sourceAccountResponse;
        return this;
    }
    public Long statusCode;
    public GetSourceAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public GetSourceAccountResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse404;
    public GetSourceAccountResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}