package openapisdk.models.operations;



public class PostSessionResponse {
    public String contentType;
    public PostSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public PostSessionResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}