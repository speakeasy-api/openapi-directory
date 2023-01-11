package openapisdk.models.operations;



public class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse {
    public String contentType;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}