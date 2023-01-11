package openapisdk.models.operations;



public class PutUsersIdResponse {
    public String contentType;
    public PutUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public PutUsersIdResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}