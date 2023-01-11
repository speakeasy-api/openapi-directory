package openapisdk.models.operations;



public class DetectImageResponse {
    public byte[] body;
    public DetectImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DetectImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public DetectImageResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public DetectImageResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public DetectImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}