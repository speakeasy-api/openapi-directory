package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesSetIamPolicyResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}