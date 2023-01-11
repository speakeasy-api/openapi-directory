package openapisdk.models.operations;



public class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse {
    public String contentType;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateIssuanceConfigsResponse listCertificateIssuanceConfigsResponse;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse withListCertificateIssuanceConfigsResponse(openapisdk.models.shared.ListCertificateIssuanceConfigsResponse listCertificateIssuanceConfigsResponse) {
        this.listCertificateIssuanceConfigsResponse = listCertificateIssuanceConfigsResponse;
        return this;
    }
    public Long statusCode;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}