package openapisdk.models.operations;



public class CloudresourcemanagerProjectsSetIamPolicyResponse {
    public String contentType;
    public CloudresourcemanagerProjectsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudresourcemanagerProjectsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}