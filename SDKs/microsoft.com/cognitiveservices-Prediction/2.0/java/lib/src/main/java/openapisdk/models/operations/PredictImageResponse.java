package openapisdk.models.operations;



public class PredictImageResponse {
    public byte[] body;
    public PredictImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PredictImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public PredictImageResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public PredictImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}