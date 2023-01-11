package openapisdk.models.operations;



public class UsersCreateGpgKeyForAuthenticatedResponse {
    public String contentType;
    public UsersCreateGpgKeyForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersCreateGpgKeyForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersCreateGpgKeyForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GpgKey gpgKey;
    public UsersCreateGpgKeyForAuthenticatedResponse withGpgKey(openapisdk.models.shared.GpgKey gpgKey) {
        this.gpgKey = gpgKey;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public UsersCreateGpgKeyForAuthenticatedResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}