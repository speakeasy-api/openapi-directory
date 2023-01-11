package openapisdk.models.operations;



public class CertificateCallbackGetResponse {
    public Object certificateCallback;
    public CertificateCallbackGetResponse withCertificateCallback(Object certificateCallback) {
        this.certificateCallback = certificateCallback;
        return this;
    }
    public String contentType;
    public CertificateCallbackGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateCallbackGetResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateCallbackGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}