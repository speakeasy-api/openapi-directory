package openapisdk.models.operations;



public class CertificateGetEntitlementResponse {
    public Object[] certificates;
    public CertificateGetEntitlementResponse withCertificates(Object[] certificates) {
        this.certificates = certificates;
        return this;
    }
    public String contentType;
    public CertificateGetEntitlementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateGetEntitlementResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateGetEntitlementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}