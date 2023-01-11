package openapisdk.models.operations;



public class AddVideoPrivacyUserResponse {
    public String contentType;
    public AddVideoPrivacyUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoPrivacyUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVideoPrivacyUserResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AddVideoPrivacyUserResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}