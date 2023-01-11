package openapisdk.models.operations;



public class CertificateRenewResponse {
    public String contentType;
    public CertificateRenewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateRenewResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateRenewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}