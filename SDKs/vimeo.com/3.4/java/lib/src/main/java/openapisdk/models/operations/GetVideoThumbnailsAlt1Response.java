package openapisdk.models.operations;



public class GetVideoThumbnailsAlt1Response {
    public String contentType;
    public GetVideoThumbnailsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoThumbnailsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Picture[] pictures;
    public GetVideoThumbnailsAlt1Response withPictures(openapisdk.models.shared.Picture[] pictures) {
        this.pictures = pictures;
        return this;
    }
}