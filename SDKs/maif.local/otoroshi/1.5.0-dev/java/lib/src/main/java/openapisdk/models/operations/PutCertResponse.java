package openapisdk.models.operations;



public class PutCertResponse {
    public openapisdk.models.shared.Certificate certificate;
    public PutCertResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public PutCertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutCertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}