package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}