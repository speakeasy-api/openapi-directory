package openapisdk.models.operations;



public class CertificatemanagerProjectsLocationsCertificatesListResponse {
    public String contentType;
    public CertificatemanagerProjectsLocationsCertificatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse;
    public CertificatemanagerProjectsLocationsCertificatesListResponse withListCertificatesResponse(openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse) {
        this.listCertificatesResponse = listCertificatesResponse;
        return this;
    }
    public Long statusCode;
    public CertificatemanagerProjectsLocationsCertificatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}