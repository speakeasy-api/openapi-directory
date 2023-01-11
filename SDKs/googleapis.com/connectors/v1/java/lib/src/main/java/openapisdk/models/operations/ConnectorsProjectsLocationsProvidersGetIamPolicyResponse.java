package openapisdk.models.operations;



public class ConnectorsProjectsLocationsProvidersGetIamPolicyResponse {
    public String contentType;
    public ConnectorsProjectsLocationsProvidersGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ConnectorsProjectsLocationsProvidersGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsProvidersGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}