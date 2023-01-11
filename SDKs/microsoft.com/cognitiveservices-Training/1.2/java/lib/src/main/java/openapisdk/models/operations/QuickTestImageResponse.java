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
    public openapisdk.models.shared.ImagePredictionResult imagePredictionResult;
    public QuickTestImageResponse withImagePredictionResult(openapisdk.models.shared.ImagePredictionResult imagePredictionResult) {
        this.imagePredictionResult = imagePredictionResult;
        return this;
    }
    public Long statusCode;
    public QuickTestImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}