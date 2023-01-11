package openapisdk.models.operations;



public class DetectImageWithNoStoreResponse {
    public byte[] body;
    public DetectImageWithNoStoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DetectImageWithNoStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public DetectImageWithNoStoreResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public DetectImageWithNoStoreResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public DetectImageWithNoStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}