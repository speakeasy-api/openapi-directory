package openapisdk.models.operations;



public class ValidateUrlResponse {
    public byte[] body;
    public ValidateUrlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ValidateUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationResult validationResult;
    public ValidateUrlResponse withValidationResult(openapisdk.models.shared.ValidationResult validationResult) {
        this.validationResult = validationResult;
        return this;
    }
}