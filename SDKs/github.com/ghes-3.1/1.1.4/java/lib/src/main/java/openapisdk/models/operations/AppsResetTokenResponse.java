package openapisdk.models.operations;



public class AppsResetTokenResponse {
    public String contentType;
    public AppsResetTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsResetTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization authorization;
    public AppsResetTokenResponse withAuthorization(openapisdk.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public AppsResetTokenResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}