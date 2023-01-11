package openapisdk.models.operations;



public class PredictImageUrlWithNoStoreResponse {
    public byte[] body;
    public PredictImageUrlWithNoStoreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PredictImageUrlWithNoStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagePredictionResultModel imagePredictionResultModel;
    public PredictImageUrlWithNoStoreResponse withImagePredictionResultModel(openapisdk.models.shared.ImagePredictionResultModel imagePredictionResultModel) {
        this.imagePredictionResultModel = imagePredictionResultModel;
        return this;
    }
    public Long statusCode;
    public PredictImageUrlWithNoStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}