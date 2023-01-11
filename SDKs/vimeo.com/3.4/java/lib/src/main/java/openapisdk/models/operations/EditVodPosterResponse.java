package openapisdk.models.operations;



public class EditVodPosterResponse {
    public String contentType;
    public EditVodPosterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditVodPosterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public EditVodPosterResponse withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}