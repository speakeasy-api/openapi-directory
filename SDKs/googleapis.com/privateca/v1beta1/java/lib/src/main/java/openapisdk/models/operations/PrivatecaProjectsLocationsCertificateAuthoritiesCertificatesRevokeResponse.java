package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeResponse {
    public openapisdk.models.shared.Certificate certificate;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}