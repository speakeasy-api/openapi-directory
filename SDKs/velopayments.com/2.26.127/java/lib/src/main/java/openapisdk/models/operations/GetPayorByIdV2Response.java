package openapisdk.models.operations;



public class GetPayorByIdV2Response {
    public String contentType;
    public GetPayorByIdV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPayorByIdV2Response withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PayorV2 payorV2;
    public GetPayorByIdV2Response withPayorV2(openapisdk.models.shared.PayorV2 payorV2) {
        this.payorV2 = payorV2;
        return this;
    }
    public Long statusCode;
    public GetPayorByIdV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPayorByIdV2Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public GetPayorByIdV2Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}