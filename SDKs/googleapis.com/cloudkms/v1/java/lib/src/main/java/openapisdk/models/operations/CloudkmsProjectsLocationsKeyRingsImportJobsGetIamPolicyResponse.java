package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}