package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}