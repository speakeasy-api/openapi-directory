package openapisdk.models.operations;



public class CreateCertResponse {
    public openapisdk.models.shared.Certificate certificate;
    public CreateCertResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public CreateCertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}