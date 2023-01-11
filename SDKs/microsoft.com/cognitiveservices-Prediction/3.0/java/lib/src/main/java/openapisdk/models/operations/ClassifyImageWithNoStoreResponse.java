package openapisdk.models.operations;



public class ClassifyImageWithNoStoreResponse {
    public byte[] body;
    public ClassifyImageWithNoStoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ClassifyImageWithNoStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public ClassifyImageWithNoStoreResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public ClassifyImageWithNoStoreResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public ClassifyImageWithNoStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}