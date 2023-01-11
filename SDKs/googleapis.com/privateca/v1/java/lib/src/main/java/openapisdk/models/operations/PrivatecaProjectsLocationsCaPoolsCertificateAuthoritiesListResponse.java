package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateAuthoritiesResponse listCertificateAuthoritiesResponse;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse withListCertificateAuthoritiesResponse(openapisdk.models.shared.ListCertificateAuthoritiesResponse listCertificateAuthoritiesResponse) {
        this.listCertificateAuthoritiesResponse = listCertificateAuthoritiesResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}