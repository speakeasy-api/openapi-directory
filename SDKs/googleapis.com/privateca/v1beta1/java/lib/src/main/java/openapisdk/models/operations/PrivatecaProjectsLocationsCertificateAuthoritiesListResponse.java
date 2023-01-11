package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateAuthoritiesListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateAuthoritiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateAuthoritiesResponse listCertificateAuthoritiesResponse;
    public PrivatecaProjectsLocationsCertificateAuthoritiesListResponse withListCertificateAuthoritiesResponse(openapisdk.models.shared.ListCertificateAuthoritiesResponse listCertificateAuthoritiesResponse) {
        this.listCertificateAuthoritiesResponse = listCertificateAuthoritiesResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateAuthoritiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}