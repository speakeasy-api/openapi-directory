package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}