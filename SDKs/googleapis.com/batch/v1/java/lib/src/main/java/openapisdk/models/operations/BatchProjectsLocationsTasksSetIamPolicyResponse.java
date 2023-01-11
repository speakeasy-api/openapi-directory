package openapisdk.models.operations;



public class BatchProjectsLocationsTasksSetIamPolicyResponse {
    public String contentType;
    public BatchProjectsLocationsTasksSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public BatchProjectsLocationsTasksSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public BatchProjectsLocationsTasksSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}