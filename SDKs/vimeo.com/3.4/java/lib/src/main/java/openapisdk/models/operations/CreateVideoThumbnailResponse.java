package openapisdk.models.operations;



public class CreateVideoThumbnailResponse {
    public String contentType;
    public CreateVideoThumbnailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVideoThumbnailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public CreateVideoThumbnailResponse withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}