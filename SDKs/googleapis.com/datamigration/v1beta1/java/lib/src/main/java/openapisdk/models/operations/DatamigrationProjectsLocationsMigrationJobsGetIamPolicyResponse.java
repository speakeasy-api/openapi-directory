package openapisdk.models.operations;



public class DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse {
    public String contentType;
    public DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}