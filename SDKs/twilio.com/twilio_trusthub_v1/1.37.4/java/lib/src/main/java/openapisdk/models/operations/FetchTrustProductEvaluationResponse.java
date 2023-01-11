package openapisdk.models.operations;



public class FetchTrustProductEvaluationResponse {
    public String contentType;
    public FetchTrustProductEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrustProductEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation trusthubV1TrustProductTrustProductEvaluation;
    public FetchTrustProductEvaluationResponse withTrusthubV1TrustProductTrustProductEvaluation(openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation trusthubV1TrustProductTrustProductEvaluation) {
        this.trusthubV1TrustProductTrustProductEvaluation = trusthubV1TrustProductTrustProductEvaluation;
        return this;
    }
}