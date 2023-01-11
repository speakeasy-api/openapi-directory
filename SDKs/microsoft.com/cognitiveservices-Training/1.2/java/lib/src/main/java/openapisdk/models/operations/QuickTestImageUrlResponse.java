package openapisdk.models.operations;



public class QuickTestImageUrlResponse {
    public byte[] body;
    public QuickTestImageUrlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public QuickTestImageUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagePredictionResult imagePredictionResult;
    public QuickTestImageUrlResponse withImagePredictionResult(openapisdk.models.shared.ImagePredictionResult imagePredictionResult) {
        this.imagePredictionResult = imagePredictionResult;
        return this;
    }
    public Long statusCode;
    public QuickTestImageUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}