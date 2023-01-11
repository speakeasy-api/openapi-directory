package openapisdk.models.operations;



public class CertificateDownloadResponse {
    public Object certificateBundle;
    public CertificateDownloadResponse withCertificateBundle(Object certificateBundle) {
        this.certificateBundle = certificateBundle;
        return this;
    }
    public String contentType;
    public CertificateDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateDownloadResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}