package openapisdk.models.operations;



public class GetVideoThumbnailsResponse {
    public String contentType;
    public GetVideoThumbnailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoThumbnailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Picture[] pictures;
    public GetVideoThumbnailsResponse withPictures(openapisdk.models.shared.Picture[] pictures) {
        this.pictures = pictures;
        return this;
    }
}