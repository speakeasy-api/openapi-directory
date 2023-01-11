package openapisdk.models.operations;



public class ClouddeployProjectsLocationsTargetsSetIamPolicyResponse {
    public String contentType;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}