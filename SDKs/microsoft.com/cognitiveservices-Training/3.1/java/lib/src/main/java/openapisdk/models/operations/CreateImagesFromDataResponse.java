package openapisdk.models.operations;



public class CreateImagesFromDataResponse {
    public byte[] body;
    public CreateImagesFromDataResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateImagesFromDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public CreateImagesFromDataResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ImageCreateSummary imageCreateSummary;
    public CreateImagesFromDataResponse withImageCreateSummary(openapisdk.models.shared.ImageCreateSummary imageCreateSummary) {
        this.imageCreateSummary = imageCreateSummary;
        return this;
    }
    public Long statusCode;
    public CreateImagesFromDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}