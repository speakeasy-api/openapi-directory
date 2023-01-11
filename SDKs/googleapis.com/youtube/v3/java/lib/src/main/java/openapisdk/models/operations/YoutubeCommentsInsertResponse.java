package openapisdk.models.operations;



public class YoutubeCommentsInsertResponse {
    public openapisdk.models.shared.Comment comment;
    public YoutubeCommentsInsertResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public YoutubeCommentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCommentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}