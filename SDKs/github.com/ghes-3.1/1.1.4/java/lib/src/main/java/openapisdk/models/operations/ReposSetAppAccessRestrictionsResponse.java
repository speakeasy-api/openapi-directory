package openapisdk.models.operations;



public class ReposSetAppAccessRestrictionsResponse {
    public String contentType;
    public ReposSetAppAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposSetAppAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] integrations;
    public ReposSetAppAccessRestrictionsResponse withIntegrations(java.util.Map<String, Object>[] integrations) {
        this.integrations = integrations;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposSetAppAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}