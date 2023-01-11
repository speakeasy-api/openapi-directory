package openapisdk.models.operations;



public class CommunicationResponse {
    public String contentType;
    public CommunicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostPredicted[] predictionResults;
    public CommunicationResponse withPredictionResults(openapisdk.models.shared.PostPredicted[] predictionResults) {
        this.predictionResults = predictionResults;
        return this;
    }
    public Long statusCode;
    public CommunicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrors validationErrors;
    public CommunicationResponse withValidationErrors(openapisdk.models.shared.ValidationErrors validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}