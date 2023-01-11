package openapisdk.models.operations;



public class PatchCertResponse {
    public openapisdk.models.shared.Certificate certificate;
    public PatchCertResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public PatchCertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchCertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}