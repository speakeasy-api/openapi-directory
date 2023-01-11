package openapisdk.models.operations;



public class CertificateRevokeResponse {
    public String contentType;
    public CertificateRevokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateRevokeResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateRevokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}