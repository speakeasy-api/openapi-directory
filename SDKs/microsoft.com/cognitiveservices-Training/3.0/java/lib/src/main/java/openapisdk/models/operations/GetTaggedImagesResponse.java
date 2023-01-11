package openapisdk.models.operations;



public class GetTaggedImagesResponse {
    public byte[] body;
    public GetTaggedImagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTaggedImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetTaggedImagesResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.Image[] images;
    public GetTaggedImagesResponse withImages(openapisdk.models.shared.Image[] images) {
        this.images = images;
        return this;
    }
    public Long statusCode;
    public GetTaggedImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}