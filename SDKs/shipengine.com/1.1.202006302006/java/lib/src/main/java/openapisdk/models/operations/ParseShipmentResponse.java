package openapisdk.models.operations;



public class ParseShipmentResponse {
    public String contentType;
    public ParseShipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParseShipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ParseShipmentResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ParseShipmentResponseBody parseShipmentResponseBody;
    public ParseShipmentResponse withParseShipmentResponseBody(openapisdk.models.shared.ParseShipmentResponseBody parseShipmentResponseBody) {
        this.parseShipmentResponseBody = parseShipmentResponseBody;
        return this;
    }
}