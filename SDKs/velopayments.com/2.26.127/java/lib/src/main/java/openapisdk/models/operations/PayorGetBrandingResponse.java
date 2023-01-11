package openapisdk.models.operations;



public class PayorGetBrandingResponse {
    public String contentType;
    public PayorGetBrandingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PayorGetBrandingResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayorBrandingResponse payorBrandingResponse;
    public PayorGetBrandingResponse withPayorBrandingResponse(openapisdk.models.shared.PayorBrandingResponse payorBrandingResponse) {
        this.payorBrandingResponse = payorBrandingResponse;
        return this;
    }
    public Long statusCode;
    public PayorGetBrandingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public PayorGetBrandingResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public PayorGetBrandingResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}