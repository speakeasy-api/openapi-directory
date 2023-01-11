package openapisdk.models.operations;



public class CloudresourcemanagerTagValuesSetIamPolicyResponse {
    public String contentType;
    public CloudresourcemanagerTagValuesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudresourcemanagerTagValuesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerTagValuesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}