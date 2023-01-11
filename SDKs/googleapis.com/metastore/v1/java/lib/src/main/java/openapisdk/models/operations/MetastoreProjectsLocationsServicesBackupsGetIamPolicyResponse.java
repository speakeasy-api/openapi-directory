package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesBackupsGetIamPolicyResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesBackupsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public MetastoreProjectsLocationsServicesBackupsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesBackupsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}