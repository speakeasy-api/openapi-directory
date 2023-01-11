package openapisdk.models.operations;



public class RetrieveAMediaItemResponse {
    public String contentType;
    public RetrieveAMediaItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Media media;
    public RetrieveAMediaItemResponse withMedia(openapisdk.models.shared.Media media) {
        this.media = media;
        return this;
    }
    public Long statusCode;
    public RetrieveAMediaItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}