package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}