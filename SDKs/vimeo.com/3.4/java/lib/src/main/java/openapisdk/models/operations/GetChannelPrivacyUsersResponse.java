package openapisdk.models.operations;



public class GetChannelPrivacyUsersResponse {
    public String contentType;
    public GetChannelPrivacyUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelPrivacyUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetChannelPrivacyUsersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetChannelPrivacyUsersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}