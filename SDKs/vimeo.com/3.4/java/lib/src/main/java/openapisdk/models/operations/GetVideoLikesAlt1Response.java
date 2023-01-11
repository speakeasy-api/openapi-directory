package openapisdk.models.operations;



public class GetVideoLikesAlt1Response {
    public String contentType;
    public GetVideoLikesAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoLikesAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetVideoLikesAlt1Response withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}