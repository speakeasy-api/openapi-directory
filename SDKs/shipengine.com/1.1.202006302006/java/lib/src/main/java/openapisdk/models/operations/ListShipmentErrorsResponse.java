package openapisdk.models.operations;



public class ListShipmentErrorsResponse {
    public String contentType;
    public ListShipmentErrorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListShipmentErrorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListShipmentErrorsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListShipmentErrorsResponseBody listShipmentErrorsResponseBody;
    public ListShipmentErrorsResponse withListShipmentErrorsResponseBody(openapisdk.models.shared.ListShipmentErrorsResponseBody listShipmentErrorsResponseBody) {
        this.listShipmentErrorsResponseBody = listShipmentErrorsResponseBody;
        return this;
    }
}