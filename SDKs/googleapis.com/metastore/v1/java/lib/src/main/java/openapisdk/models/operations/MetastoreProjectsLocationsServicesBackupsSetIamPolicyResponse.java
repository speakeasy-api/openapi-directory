package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesBackupsSetIamPolicyResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}