package openapisdk.models.operations;



public class PredictImageUrlResponse {
    public byte[] body;
    public PredictImageUrlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PredictImageUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagePrediction imagePrediction;
    public PredictImageUrlResponse withImagePrediction(openapisdk.models.shared.ImagePrediction imagePrediction) {
        this.imagePrediction = imagePrediction;
        return this;
    }
    public Long statusCode;
    public PredictImageUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}