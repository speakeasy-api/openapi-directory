package openapisdk.models.operations;



public class OneCertResponse {
    public openapisdk.models.shared.Certificate certificate;
    public OneCertResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public OneCertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OneCertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}