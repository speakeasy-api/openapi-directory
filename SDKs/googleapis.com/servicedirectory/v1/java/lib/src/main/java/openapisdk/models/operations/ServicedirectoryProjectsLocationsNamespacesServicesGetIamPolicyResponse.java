package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}