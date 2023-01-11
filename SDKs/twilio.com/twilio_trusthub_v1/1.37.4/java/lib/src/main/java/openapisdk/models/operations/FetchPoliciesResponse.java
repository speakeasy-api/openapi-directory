package openapisdk.models.operations;



public class FetchPoliciesResponse {
    public String contentType;
    public FetchPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1Policies trusthubV1Policies;
    public FetchPoliciesResponse withTrusthubV1Policies(openapisdk.models.shared.TrusthubV1Policies trusthubV1Policies) {
        this.trusthubV1Policies = trusthubV1Policies;
        return this;
    }
}