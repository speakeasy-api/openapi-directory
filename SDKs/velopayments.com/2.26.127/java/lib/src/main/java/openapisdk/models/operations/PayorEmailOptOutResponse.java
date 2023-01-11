package openapisdk.models.operations;



public class PayorEmailOptOutResponse {
    public String contentType;
    public PayorEmailOptOutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PayorEmailOptOutResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PayorEmailOptOutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public PayorEmailOptOutResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public PayorEmailOptOutResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}