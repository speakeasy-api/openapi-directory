package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateRevocationListsResponse listCertificateRevocationListsResponse;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse withListCertificateRevocationListsResponse(openapisdk.models.shared.ListCertificateRevocationListsResponse listCertificateRevocationListsResponse) {
        this.listCertificateRevocationListsResponse = listCertificateRevocationListsResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}