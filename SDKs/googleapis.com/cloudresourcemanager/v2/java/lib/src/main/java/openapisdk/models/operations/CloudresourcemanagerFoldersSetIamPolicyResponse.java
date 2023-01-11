package openapisdk.models.operations;



public class CloudresourcemanagerFoldersSetIamPolicyResponse {
    public String contentType;
    public CloudresourcemanagerFoldersSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudresourcemanagerFoldersSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}