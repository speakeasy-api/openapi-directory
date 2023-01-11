package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateRevocationListsResponse listCertificateRevocationListsResponse;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsListResponse withListCertificateRevocationListsResponse(openapisdk.models.shared.ListCertificateRevocationListsResponse listCertificateRevocationListsResponse) {
        this.listCertificateRevocationListsResponse = listCertificateRevocationListsResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}