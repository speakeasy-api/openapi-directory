package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsCertificatesListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsCertificatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse;
    public PrivatecaProjectsLocationsCaPoolsCertificatesListResponse withListCertificatesResponse(openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse) {
        this.listCertificatesResponse = listCertificatesResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsCertificatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}