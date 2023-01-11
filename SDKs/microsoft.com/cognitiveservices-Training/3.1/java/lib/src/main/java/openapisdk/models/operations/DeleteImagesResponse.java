package openapisdk.models.operations;



public class DeleteImagesResponse {
    public byte[] body;
    public DeleteImagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public DeleteImagesResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Long statusCode;
    public DeleteImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}