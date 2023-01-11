package openapisdk.models.operations;



public class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse {
    public String contentType;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateMapEntriesResponse listCertificateMapEntriesResponse;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse withListCertificateMapEntriesResponse(openapisdk.models.shared.ListCertificateMapEntriesResponse listCertificateMapEntriesResponse) {
        this.listCertificateMapEntriesResponse = listCertificateMapEntriesResponse;
        return this;
    }
    public Long statusCode;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}