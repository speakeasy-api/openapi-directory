package openapisdk.models.operations;



public class ListShipmentRatesResponse {
    public String contentType;
    public ListShipmentRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListShipmentRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListShipmentRatesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListShipmentRatesResponseBody listShipmentRatesResponseBody;
    public ListShipmentRatesResponse withListShipmentRatesResponseBody(openapisdk.models.shared.ListShipmentRatesResponseBody listShipmentRatesResponseBody) {
        this.listShipmentRatesResponseBody = listShipmentRatesResponseBody;
        return this;
    }
}