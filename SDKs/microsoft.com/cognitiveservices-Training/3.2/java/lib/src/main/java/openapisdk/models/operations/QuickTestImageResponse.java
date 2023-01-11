package openapisdk.models.operations;



public class QuickTestImageResponse {
    public byte[] body;
    public QuickTestImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public QuickTestImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public QuickTestImageResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public QuickTestImageResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public QuickTestImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}