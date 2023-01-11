package openapisdk.models.operations;



public class GetCommentsAlt1Response {
    public String contentType;
    public GetCommentsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommentsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment[] comments;
    public GetCommentsAlt1Response withComments(openapisdk.models.shared.Comment[] comments) {
        this.comments = comments;
        return this;
    }
}