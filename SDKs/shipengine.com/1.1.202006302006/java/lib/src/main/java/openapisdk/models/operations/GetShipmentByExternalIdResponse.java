package openapisdk.models.operations;



public class GetShipmentByExternalIdResponse {
    public String contentType;
    public GetShipmentByExternalIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetShipmentByExternalIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetShipmentByExternalIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetShipmentByExternalIdResponseBody getShipmentByExternalIdResponseBody;
    public GetShipmentByExternalIdResponse withGetShipmentByExternalIdResponseBody(openapisdk.models.shared.GetShipmentByExternalIdResponseBody getShipmentByExternalIdResponseBody) {
        this.getShipmentByExternalIdResponseBody = getShipmentByExternalIdResponseBody;
        return this;
    }
}