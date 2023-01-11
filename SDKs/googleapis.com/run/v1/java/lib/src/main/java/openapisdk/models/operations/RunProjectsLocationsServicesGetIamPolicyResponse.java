package openapisdk.models.operations;



public class RunProjectsLocationsServicesGetIamPolicyResponse {
    public String contentType;
    public RunProjectsLocationsServicesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public RunProjectsLocationsServicesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}