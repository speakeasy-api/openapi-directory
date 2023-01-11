package openapisdk.models.operations;



public class EkmanEmotionResponse {
    public String contentType;
    public EkmanEmotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostPredicted[] predictionResults;
    public EkmanEmotionResponse withPredictionResults(openapisdk.models.shared.PostPredicted[] predictionResults) {
        this.predictionResults = predictionResults;
        return this;
    }
    public Long statusCode;
    public EkmanEmotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrors validationErrors;
    public EkmanEmotionResponse withValidationErrors(openapisdk.models.shared.ValidationErrors validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}