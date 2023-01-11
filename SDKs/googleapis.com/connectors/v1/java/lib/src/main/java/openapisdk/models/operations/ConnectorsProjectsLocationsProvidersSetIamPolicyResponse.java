package openapisdk.models.operations;



public class ConnectorsProjectsLocationsProvidersSetIamPolicyResponse {
    public String contentType;
    public ConnectorsProjectsLocationsProvidersSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ConnectorsProjectsLocationsProvidersSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsProvidersSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}