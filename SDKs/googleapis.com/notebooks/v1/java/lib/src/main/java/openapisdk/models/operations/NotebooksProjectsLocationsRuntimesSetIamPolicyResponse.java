package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesSetIamPolicyResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}