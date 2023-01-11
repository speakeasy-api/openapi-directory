package openapisdk.models.operations;



public class CertificateResendEmailAddressResponse {
    public String contentType;
    public CertificateResendEmailAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateResendEmailAddressResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateResendEmailAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}