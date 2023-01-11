package openapisdk.models.operations;



public class CertificateCancelResponse {
    public String contentType;
    public CertificateCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateCancelResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}