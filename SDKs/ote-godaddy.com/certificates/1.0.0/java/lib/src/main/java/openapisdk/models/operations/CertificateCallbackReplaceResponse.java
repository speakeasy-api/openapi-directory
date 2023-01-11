package openapisdk.models.operations;



public class CertificateCallbackReplaceResponse {
    public String contentType;
    public CertificateCallbackReplaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateCallbackReplaceResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateCallbackReplaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}