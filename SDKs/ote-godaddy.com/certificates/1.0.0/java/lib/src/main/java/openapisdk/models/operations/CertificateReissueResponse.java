package openapisdk.models.operations;



public class CertificateReissueResponse {
    public String contentType;
    public CertificateReissueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateReissueResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateReissueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}