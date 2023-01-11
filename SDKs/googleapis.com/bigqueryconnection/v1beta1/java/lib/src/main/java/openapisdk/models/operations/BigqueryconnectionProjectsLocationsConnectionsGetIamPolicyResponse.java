package openapisdk.models.operations;



public class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse {
    public String contentType;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}