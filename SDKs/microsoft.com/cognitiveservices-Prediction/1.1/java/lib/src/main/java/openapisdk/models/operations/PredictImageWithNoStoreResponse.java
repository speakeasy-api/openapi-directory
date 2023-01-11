package openapisdk.models.operations;



public class PredictImageWithNoStoreResponse {
    public byte[] body;
    public PredictImageWithNoStoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PredictImageWithNoStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagePredictionResultModel imagePredictionResultModel;
    public PredictImageWithNoStoreResponse withImagePredictionResultModel(openapisdk.models.shared.ImagePredictionResultModel imagePredictionResultModel) {
        this.imagePredictionResultModel = imagePredictionResultModel;
        return this;
    }
    public Long statusCode;
    public PredictImageWithNoStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}