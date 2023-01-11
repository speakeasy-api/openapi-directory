package openapisdk.models.operations;



public class GetUserAlt1Response {
    public String contentType;
    public GetUserAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public GetUserAlt1Response withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}