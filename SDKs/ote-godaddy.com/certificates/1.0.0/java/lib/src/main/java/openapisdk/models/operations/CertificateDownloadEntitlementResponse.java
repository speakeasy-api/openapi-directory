package openapisdk.models.operations;



public class CertificateDownloadEntitlementResponse {
    public Object certificateBundle;
    public CertificateDownloadEntitlementResponse withCertificateBundle(Object certificateBundle) {
        this.certificateBundle = certificateBundle;
        return this;
    }
    public String contentType;
    public CertificateDownloadEntitlementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateDownloadEntitlementResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateDownloadEntitlementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}