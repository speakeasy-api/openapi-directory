package openapisdk.models.operations;



public class BatchProjectsLocationsTasksGetIamPolicyResponse {
    public String contentType;
    public BatchProjectsLocationsTasksGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public BatchProjectsLocationsTasksGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public BatchProjectsLocationsTasksGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}