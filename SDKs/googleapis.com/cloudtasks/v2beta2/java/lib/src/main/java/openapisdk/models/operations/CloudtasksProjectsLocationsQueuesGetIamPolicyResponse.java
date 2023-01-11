package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesGetIamPolicyResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}