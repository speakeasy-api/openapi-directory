package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}