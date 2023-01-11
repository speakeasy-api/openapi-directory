package openapisdk.models.operations;



public class EditVideoThumbnailResponse {
    public String contentType;
    public EditVideoThumbnailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditVideoThumbnailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public EditVideoThumbnailResponse withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}