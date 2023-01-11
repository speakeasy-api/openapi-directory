package openapisdk.models.operations;



public class GetPayorByIdResponse {
    public String contentType;
    public GetPayorByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPayorByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayorV1 payorV1;
    public GetPayorByIdResponse withPayorV1(openapisdk.models.shared.PayorV1 payorV1) {
        this.payorV1 = payorV1;
        return this;
    }
    public Long statusCode;
    public GetPayorByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse403;
    public GetPayorByIdResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}