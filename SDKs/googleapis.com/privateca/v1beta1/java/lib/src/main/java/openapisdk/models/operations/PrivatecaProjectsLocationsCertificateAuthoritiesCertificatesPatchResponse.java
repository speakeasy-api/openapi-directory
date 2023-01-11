package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchResponse {
    public openapisdk.models.shared.Certificate certificate;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}