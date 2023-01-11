package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}