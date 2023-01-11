package openapisdk.models.operations;



public class GetPictureAlt1Response {
    public String contentType;
    public GetPictureAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPictureAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public GetPictureAlt1Response withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}