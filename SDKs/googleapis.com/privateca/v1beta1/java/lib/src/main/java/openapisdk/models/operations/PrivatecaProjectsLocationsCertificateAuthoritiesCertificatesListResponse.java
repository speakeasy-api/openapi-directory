package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListResponse withListCertificatesResponse(openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse) {
        this.listCertificatesResponse = listCertificatesResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}