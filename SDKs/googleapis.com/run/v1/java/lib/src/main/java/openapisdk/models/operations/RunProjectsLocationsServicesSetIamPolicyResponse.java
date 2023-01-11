package openapisdk.models.operations;



public class RunProjectsLocationsServicesSetIamPolicyResponse {
    public String contentType;
    public RunProjectsLocationsServicesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public RunProjectsLocationsServicesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}