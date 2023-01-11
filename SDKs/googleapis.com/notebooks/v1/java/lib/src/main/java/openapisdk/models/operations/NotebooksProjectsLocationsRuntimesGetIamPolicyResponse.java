package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesGetIamPolicyResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public NotebooksProjectsLocationsRuntimesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}