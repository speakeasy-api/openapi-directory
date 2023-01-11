package openapisdk.models.operations;



public class FetchCustomerProfileEvaluationResponse {
    public String contentType;
    public FetchCustomerProfileEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCustomerProfileEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation trusthubV1CustomerProfileCustomerProfileEvaluation;
    public FetchCustomerProfileEvaluationResponse withTrusthubV1CustomerProfileCustomerProfileEvaluation(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation trusthubV1CustomerProfileCustomerProfileEvaluation) {
        this.trusthubV1CustomerProfileCustomerProfileEvaluation = trusthubV1CustomerProfileCustomerProfileEvaluation;
        return this;
    }
}