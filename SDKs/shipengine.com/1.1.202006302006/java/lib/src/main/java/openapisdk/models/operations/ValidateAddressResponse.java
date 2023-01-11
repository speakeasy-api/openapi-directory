package openapisdk.models.operations;



public class ValidateAddressResponse {
    public String contentType;
    public ValidateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ValidateAddressResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ValidateAddressResponseBody[] validateAddressResponseBody;
    public ValidateAddressResponse withValidateAddressResponseBody(openapisdk.models.shared.ValidateAddressResponseBody[] validateAddressResponseBody) {
        this.validateAddressResponseBody = validateAddressResponseBody;
        return this;
    }
}