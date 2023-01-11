package openapisdk.models.operations;



public class PayorCreateApplicationRequestResponse {
    public String contentType;
    public PayorCreateApplicationRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PayorCreateApplicationRequestResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PayorCreateApplicationRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public PayorCreateApplicationRequestResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public PayorCreateApplicationRequestResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public PayorCreateApplicationRequestResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
    public Object inlineResponse409;
    public PayorCreateApplicationRequestResponse withInlineResponse409(Object inlineResponse409) {
        this.inlineResponse409 = inlineResponse409;
        return this;
    }
}