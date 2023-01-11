package openapisdk.models.operations;



public class AddVideoPrivacyUsersResponse {
    public String contentType;
    public AddVideoPrivacyUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoPrivacyUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public AddVideoPrivacyUsersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}