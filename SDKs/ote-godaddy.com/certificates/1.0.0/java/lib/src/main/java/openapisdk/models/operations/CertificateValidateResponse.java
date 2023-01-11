package openapisdk.models.operations;



public class CertificateValidateResponse {
    public String contentType;
    public CertificateValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateValidateResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}