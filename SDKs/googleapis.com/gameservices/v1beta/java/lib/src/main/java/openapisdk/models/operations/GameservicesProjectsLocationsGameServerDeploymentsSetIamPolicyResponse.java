package openapisdk.models.operations;



public class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse {
    public String contentType;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}