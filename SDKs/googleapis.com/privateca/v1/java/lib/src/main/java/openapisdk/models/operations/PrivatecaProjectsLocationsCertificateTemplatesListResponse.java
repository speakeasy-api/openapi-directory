package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateTemplatesListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCertificateTemplatesResponse listCertificateTemplatesResponse;
    public PrivatecaProjectsLocationsCertificateTemplatesListResponse withListCertificateTemplatesResponse(openapisdk.models.shared.ListCertificateTemplatesResponse listCertificateTemplatesResponse) {
        this.listCertificateTemplatesResponse = listCertificateTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}