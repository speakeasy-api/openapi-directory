package openapisdk.models.operations;



public class YoutubeThumbnailsSetResponse {
    public String contentType;
    public YoutubeThumbnailsSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeThumbnailsSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ThumbnailSetResponse thumbnailSetResponse;
    public YoutubeThumbnailsSetResponse withThumbnailSetResponse(openapisdk.models.shared.ThumbnailSetResponse thumbnailSetResponse) {
        this.thumbnailSetResponse = thumbnailSetResponse;
        return this;
    }
}