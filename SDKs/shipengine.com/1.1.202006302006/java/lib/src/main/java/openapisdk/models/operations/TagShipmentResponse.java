package openapisdk.models.operations;



public class TagShipmentResponse {
    public String contentType;
    public TagShipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagShipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public TagShipmentResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.TagShipmentResponseBody tagShipmentResponseBody;
    public TagShipmentResponse withTagShipmentResponseBody(openapisdk.models.shared.TagShipmentResponseBody tagShipmentResponseBody) {
        this.tagShipmentResponseBody = tagShipmentResponseBody;
        return this;
    }
}