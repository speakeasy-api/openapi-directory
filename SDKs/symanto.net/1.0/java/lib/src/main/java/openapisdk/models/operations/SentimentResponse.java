package openapisdk.models.operations;



public class SentimentResponse {
    public String contentType;
    public SentimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostPredicted[] predictionResults;
    public SentimentResponse withPredictionResults(openapisdk.models.shared.PostPredicted[] predictionResults) {
        this.predictionResults = predictionResults;
        return this;
    }
    public Long statusCode;
    public SentimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrors validationErrors;
    public SentimentResponse withValidationErrors(openapisdk.models.shared.ValidationErrors validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}