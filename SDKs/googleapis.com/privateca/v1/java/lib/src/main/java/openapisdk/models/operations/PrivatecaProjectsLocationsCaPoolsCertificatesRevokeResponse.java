package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse {
    public openapisdk.models.shared.Certificate certificate;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse withCertificate(openapisdk.models.shared.Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}