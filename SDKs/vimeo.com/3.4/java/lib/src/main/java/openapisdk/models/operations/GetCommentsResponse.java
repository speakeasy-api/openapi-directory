package openapisdk.models.operations;



public class GetCommentsResponse {
    public String contentType;
    public GetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Comment[] comments;
    public GetCommentsResponse withComments(openapisdk.models.shared.Comment[] comments) {
        this.comments = comments;
        return this;
    }
}