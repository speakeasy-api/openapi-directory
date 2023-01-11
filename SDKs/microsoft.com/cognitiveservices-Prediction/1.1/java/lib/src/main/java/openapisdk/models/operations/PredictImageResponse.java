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
    public openapisdk.models.shared.ImagePredictionResultModel imagePredictionResultModel;
    public PredictImageResponse withImagePredictionResultModel(openapisdk.models.shared.ImagePredictionResultModel imagePredictionResultModel) {
        this.imagePredictionResultModel = imagePredictionResultModel;
        return this;
    }
    public Long statusCode;
    public PredictImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}