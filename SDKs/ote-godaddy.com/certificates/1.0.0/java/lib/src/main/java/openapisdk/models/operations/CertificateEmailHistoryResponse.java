package openapisdk.models.operations;



public class CertificateEmailHistoryResponse {
    public Object certificateEmailHistory;
    public CertificateEmailHistoryResponse withCertificateEmailHistory(Object certificateEmailHistory) {
        this.certificateEmailHistory = certificateEmailHistory;
        return this;
    }
    public String contentType;
    public CertificateEmailHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateEmailHistoryResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateEmailHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}