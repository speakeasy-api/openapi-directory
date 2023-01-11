package openapisdk.models.operations;



public class CertificateGetResponse {
    public Object certificate;
    public CertificateGetResponse withCertificate(Object certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public CertificateGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateGetResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}