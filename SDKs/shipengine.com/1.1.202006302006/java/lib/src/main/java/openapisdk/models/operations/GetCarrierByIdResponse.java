package openapisdk.models.operations;



public class GetCarrierByIdResponse {
    public String contentType;
    public GetCarrierByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCarrierByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetCarrierByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetCarrierByIdResponseBody getCarrierByIdResponseBody;
    public GetCarrierByIdResponse withGetCarrierByIdResponseBody(openapisdk.models.shared.GetCarrierByIdResponseBody getCarrierByIdResponseBody) {
        this.getCarrierByIdResponseBody = getCarrierByIdResponseBody;
        return this;
    }
}