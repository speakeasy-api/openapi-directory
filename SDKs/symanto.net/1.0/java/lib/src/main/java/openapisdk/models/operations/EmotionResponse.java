package openapisdk.models.operations;



public class EmotionResponse {
    public String contentType;
    public EmotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostPredicted[] predictionResults;
    public EmotionResponse withPredictionResults(openapisdk.models.shared.PostPredicted[] predictionResults) {
        this.predictionResults = predictionResults;
        return this;
    }
    public Long statusCode;
    public EmotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrors validationErrors;
    public EmotionResponse withValidationErrors(openapisdk.models.shared.ValidationErrors validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}