package openapisdk.models.operations;



public class GetAccountUsersResponse {
    public String contentType;
    public GetAccountUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetAccountUsersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}