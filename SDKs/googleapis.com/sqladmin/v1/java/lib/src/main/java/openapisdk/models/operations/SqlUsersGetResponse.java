package openapisdk.models.operations;



public class SqlUsersGetResponse {
    public String contentType;
    public SqlUsersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SqlUsersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public SqlUsersGetResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}