package openapisdk.models.operations;



public class ClassifyImageUrlWithNoStoreResponse {
    public byte[] body;
    public ClassifyImageUrlWithNoStoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ClassifyImageUrlWithNoStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public ClassifyImageUrlWithNoStoreResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public ClassifyImageUrlWithNoStoreResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public ClassifyImageUrlWithNoStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}