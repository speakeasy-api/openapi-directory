package openapisdk.models.operations;



public class PersonalityResponse {
    public String contentType;
    public PersonalityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostPredicted[] predictionResults;
    public PersonalityResponse withPredictionResults(openapisdk.models.shared.PostPredicted[] predictionResults) {
        this.predictionResults = predictionResults;
        return this;
    }
    public Long statusCode;
    public PersonalityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrors validationErrors;
    public PersonalityResponse withValidationErrors(openapisdk.models.shared.ValidationErrors validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}