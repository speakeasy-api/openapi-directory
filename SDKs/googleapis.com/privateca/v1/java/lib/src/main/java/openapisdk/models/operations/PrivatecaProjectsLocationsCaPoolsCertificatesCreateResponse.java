package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse {
    public openapisdk.models.shared.Certificate certificate;
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}