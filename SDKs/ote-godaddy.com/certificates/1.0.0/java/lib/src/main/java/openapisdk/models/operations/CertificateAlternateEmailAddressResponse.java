package openapisdk.models.operations;



public class CertificateAlternateEmailAddressResponse {
    public Object certificateEmailHistory;
    public CertificateAlternateEmailAddressResponse withCertificateEmailHistory(Object certificateEmailHistory) {
        this.certificateEmailHistory = certificateEmailHistory;
        return this;
    }
    public String contentType;
    public CertificateAlternateEmailAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateAlternateEmailAddressResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateAlternateEmailAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}