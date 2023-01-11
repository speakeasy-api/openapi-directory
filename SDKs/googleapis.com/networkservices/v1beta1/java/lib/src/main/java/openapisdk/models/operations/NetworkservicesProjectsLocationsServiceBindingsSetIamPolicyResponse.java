package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}