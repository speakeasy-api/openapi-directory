package openapisdk.models.operations;



public class CertificateResendEmailResponse {
    public String contentType;
    public CertificateResendEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateResendEmailResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateResendEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}