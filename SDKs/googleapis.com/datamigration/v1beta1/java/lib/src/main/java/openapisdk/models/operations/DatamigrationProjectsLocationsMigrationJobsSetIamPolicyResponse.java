package openapisdk.models.operations;



public class DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse {
    public String contentType;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}