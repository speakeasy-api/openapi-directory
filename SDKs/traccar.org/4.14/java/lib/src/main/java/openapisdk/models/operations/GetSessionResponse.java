package openapisdk.models.operations;



public class GetSessionResponse {
    public String contentType;
    public GetSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public GetSessionResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}