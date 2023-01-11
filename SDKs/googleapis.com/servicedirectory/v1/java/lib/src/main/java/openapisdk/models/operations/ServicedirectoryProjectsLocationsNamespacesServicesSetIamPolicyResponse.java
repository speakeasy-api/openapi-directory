package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}