package openapisdk.models.operations;



public class UpdateShipmentResponse {
    public String contentType;
    public UpdateShipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateShipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public UpdateShipmentResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.UpdateShipmentResponseBody updateShipmentResponseBody;
    public UpdateShipmentResponse withUpdateShipmentResponseBody(openapisdk.models.shared.UpdateShipmentResponseBody updateShipmentResponseBody) {
        this.updateShipmentResponseBody = updateShipmentResponseBody;
        return this;
    }
}