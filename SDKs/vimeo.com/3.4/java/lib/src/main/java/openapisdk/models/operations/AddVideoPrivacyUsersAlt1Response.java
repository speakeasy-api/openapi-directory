package openapisdk.models.operations;



public class AddVideoPrivacyUsersAlt1Response {
    public String contentType;
    public AddVideoPrivacyUsersAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoPrivacyUsersAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public AddVideoPrivacyUsersAlt1Response withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}