package openapisdk.models.operations;



public class CreateCustomerProfileEvaluationResponse {
    public String contentType;
    public CreateCustomerProfileEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCustomerProfileEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation trusthubV1CustomerProfileCustomerProfileEvaluation;
    public CreateCustomerProfileEvaluationResponse withTrusthubV1CustomerProfileCustomerProfileEvaluation(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation trusthubV1CustomerProfileCustomerProfileEvaluation) {
        this.trusthubV1CustomerProfileCustomerProfileEvaluation = trusthubV1CustomerProfileCustomerProfileEvaluation;
        return this;
    }
}