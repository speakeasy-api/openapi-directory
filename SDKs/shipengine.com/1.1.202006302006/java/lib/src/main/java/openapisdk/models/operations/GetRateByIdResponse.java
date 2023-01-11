package openapisdk.models.operations;



public class GetRateByIdResponse {
    public String contentType;
    public GetRateByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRateByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetRateByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetRateByIdResponseBody getRateByIdResponseBody;
    public GetRateByIdResponse withGetRateByIdResponseBody(openapisdk.models.shared.GetRateByIdResponseBody getRateByIdResponseBody) {
        this.getRateByIdResponseBody = getRateByIdResponseBody;
        return this;
    }
}