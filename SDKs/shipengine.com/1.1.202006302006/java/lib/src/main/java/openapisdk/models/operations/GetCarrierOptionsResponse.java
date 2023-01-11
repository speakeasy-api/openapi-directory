package openapisdk.models.operations;



public class GetCarrierOptionsResponse {
    public String contentType;
    public GetCarrierOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCarrierOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetCarrierOptionsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetCarrierOptionsResponseBody getCarrierOptionsResponseBody;
    public GetCarrierOptionsResponse withGetCarrierOptionsResponseBody(openapisdk.models.shared.GetCarrierOptionsResponseBody getCarrierOptionsResponseBody) {
        this.getCarrierOptionsResponseBody = getCarrierOptionsResponseBody;
        return this;
    }
}