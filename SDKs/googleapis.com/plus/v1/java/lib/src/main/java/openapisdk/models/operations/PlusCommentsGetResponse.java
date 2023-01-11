package openapisdk.models.operations;



public class PlusCommentsGetResponse {
    public openapisdk.models.shared.Comment comment;
    public PlusCommentsGetResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public PlusCommentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlusCommentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}