package openapisdk.models.operations;



public class GetVideoPrivacyUsersAlt1Response {
    public String contentType;
    public GetVideoPrivacyUsersAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoPrivacyUsersAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVideoPrivacyUsersAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetVideoPrivacyUsersAlt1Response withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}