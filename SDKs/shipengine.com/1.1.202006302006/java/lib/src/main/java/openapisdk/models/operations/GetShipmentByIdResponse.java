package openapisdk.models.operations;



public class GetShipmentByIdResponse {
    public String contentType;
    public GetShipmentByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetShipmentByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetShipmentByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetShipmentByIdResponseBody getShipmentByIdResponseBody;
    public GetShipmentByIdResponse withGetShipmentByIdResponseBody(openapisdk.models.shared.GetShipmentByIdResponseBody getShipmentByIdResponseBody) {
        this.getShipmentByIdResponseBody = getShipmentByIdResponseBody;
        return this;
    }
}