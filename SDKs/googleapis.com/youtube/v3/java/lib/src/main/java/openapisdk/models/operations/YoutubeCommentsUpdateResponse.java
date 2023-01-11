package openapisdk.models.operations;



public class YoutubeCommentsUpdateResponse {
    public openapisdk.models.shared.Comment comment;
    public YoutubeCommentsUpdateResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public YoutubeCommentsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCommentsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}