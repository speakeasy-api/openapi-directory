package openapisdk.models.operations;



public class CertificatemanagerProjectsLocationsCertificateMapsListResponse {
    public String contentType;
    public CertificatemanagerProjectsLocationsCertificateMapsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateMapsResponse listCertificateMapsResponse;
    public CertificatemanagerProjectsLocationsCertificateMapsListResponse withListCertificateMapsResponse(openapisdk.models.shared.ListCertificateMapsResponse listCertificateMapsResponse) {
        this.listCertificateMapsResponse = listCertificateMapsResponse;
        return this;
    }
    public Long statusCode;
    public CertificatemanagerProjectsLocationsCertificateMapsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}