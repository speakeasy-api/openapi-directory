package openapisdk.models.operations;



public class CloudresourcemanagerFoldersGetIamPolicyResponse {
    public String contentType;
    public CloudresourcemanagerFoldersGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudresourcemanagerFoldersGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}