package openapisdk.models.operations;



public class ValidateGroupApplicationResponse {
    public openapisdk.models.shared.ApplicationValidationResult applicationValidationResult;
    public ValidateGroupApplicationResponse withApplicationValidationResult(openapisdk.models.shared.ApplicationValidationResult applicationValidationResult) {
        this.applicationValidationResult = applicationValidationResult;
        return this;
    }
    public String contentType;
    public ValidateGroupApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateGroupApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}