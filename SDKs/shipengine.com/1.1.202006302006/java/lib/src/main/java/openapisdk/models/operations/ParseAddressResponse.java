package openapisdk.models.operations;



public class ParseAddressResponse {
    public String contentType;
    public ParseAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ParseAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ParseAddressResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ParseAddressResponseBody parseAddressResponseBody;
    public ParseAddressResponse withParseAddressResponseBody(openapisdk.models.shared.ParseAddressResponseBody parseAddressResponseBody) {
        this.parseAddressResponseBody = parseAddressResponseBody;
        return this;
    }
}