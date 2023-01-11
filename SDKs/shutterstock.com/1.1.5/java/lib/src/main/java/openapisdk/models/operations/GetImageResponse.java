package openapisdk.models.operations;



public class GetImageResponse {
    public String contentType;
    public GetImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Image image;
    public GetImageResponse withImage(openapisdk.models.shared.Image image) {
        this.image = image;
        return this;
    }
    public Long statusCode;
    public GetImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}