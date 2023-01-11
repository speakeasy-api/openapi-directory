package openapisdk.models.operations;



public class GetCertificatesResponse {
    public GetCertificatesCertificatesResponse certificatesResponse;
    public GetCertificatesResponse withCertificatesResponse(GetCertificatesCertificatesResponse certificatesResponse) {
        this.certificatesResponse = certificatesResponse;
        return this;
    }
    public String contentType;
    public GetCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}