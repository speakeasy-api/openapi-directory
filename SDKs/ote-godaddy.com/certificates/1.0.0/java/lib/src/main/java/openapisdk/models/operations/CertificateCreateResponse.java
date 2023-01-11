package openapisdk.models.operations;



public class CertificateCreateResponse {
    public Object certificateIdentifier;
    public CertificateCreateResponse withCertificateIdentifier(Object certificateIdentifier) {
        this.certificateIdentifier = certificateIdentifier;
        return this;
    }
    public String contentType;
    public CertificateCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateCreateResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}