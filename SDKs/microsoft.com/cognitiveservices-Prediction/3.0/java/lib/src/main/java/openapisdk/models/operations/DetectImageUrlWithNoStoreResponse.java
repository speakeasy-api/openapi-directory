package openapisdk.models.operations;



public class DetectImageUrlWithNoStoreResponse {
    public byte[] body;
    public DetectImageUrlWithNoStoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DetectImageUrlWithNoStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public DetectImageUrlWithNoStoreResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public DetectImageUrlWithNoStoreResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public DetectImageUrlWithNoStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}