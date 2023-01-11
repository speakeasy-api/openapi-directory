package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}