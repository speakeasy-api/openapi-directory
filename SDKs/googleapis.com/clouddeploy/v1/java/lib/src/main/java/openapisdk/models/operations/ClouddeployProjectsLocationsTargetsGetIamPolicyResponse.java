package openapisdk.models.operations;



public class ClouddeployProjectsLocationsTargetsGetIamPolicyResponse {
    public String contentType;
    public ClouddeployProjectsLocationsTargetsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ClouddeployProjectsLocationsTargetsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsTargetsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}