package openapisdk.models.operations;



public class GetUntaggedImagesResponse {
    public byte[] body;
    public GetUntaggedImagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUntaggedImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetUntaggedImagesResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.Image[] images;
    public GetUntaggedImagesResponse withImages(openapisdk.models.shared.Image[] images) {
        this.images = images;
        return this;
    }
    public Long statusCode;
    public GetUntaggedImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}