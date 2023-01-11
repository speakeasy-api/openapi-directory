package openapisdk.models.operations;



public class CreateTrustProductEvaluationResponse {
    public String contentType;
    public CreateTrustProductEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTrustProductEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation trusthubV1TrustProductTrustProductEvaluation;
    public CreateTrustProductEvaluationResponse withTrusthubV1TrustProductTrustProductEvaluation(openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation trusthubV1TrustProductTrustProductEvaluation) {
        this.trusthubV1TrustProductTrustProductEvaluation = trusthubV1TrustProductTrustProductEvaluation;
        return this;
    }
}