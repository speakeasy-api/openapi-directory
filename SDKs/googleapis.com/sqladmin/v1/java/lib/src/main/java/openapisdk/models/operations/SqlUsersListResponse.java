package openapisdk.models.operations;



public class SqlUsersListResponse {
    public String contentType;
    public SqlUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SqlUsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsersListResponse usersListResponse;
    public SqlUsersListResponse withUsersListResponse(openapisdk.models.shared.UsersListResponse usersListResponse) {
        this.usersListResponse = usersListResponse;
        return this;
    }
}