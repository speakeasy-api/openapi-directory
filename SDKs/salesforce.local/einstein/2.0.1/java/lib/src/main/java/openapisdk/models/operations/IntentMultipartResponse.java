package openapisdk.models.operations;



public class IntentMultipartResponse {
    public String contentType;
    public IntentMultipartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntentPredictResponse intentPredictResponse;
    public IntentMultipartResponse withIntentPredictResponse(openapisdk.models.shared.IntentPredictResponse intentPredictResponse) {
        this.intentPredictResponse = intentPredictResponse;
        return this;
    }
    public openapisdk.models.shared.PredictionErrorResponse predictionErrorResponse;
    public IntentMultipartResponse withPredictionErrorResponse(openapisdk.models.shared.PredictionErrorResponse predictionErrorResponse) {
        this.predictionErrorResponse = predictionErrorResponse;
        return this;
    }
    public Long statusCode;
    public IntentMultipartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}