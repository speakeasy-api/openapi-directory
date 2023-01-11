package openapisdk.models.operations;



public class PutCertificatesIdResponse {
    public PutCertificatesIdCertificateResponse certificateResponse;
    public PutCertificatesIdResponse withCertificateResponse(PutCertificatesIdCertificateResponse certificateResponse) {
        this.certificateResponse = certificateResponse;
        return this;
    }
    public String contentType;
    public PutCertificatesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutCertificatesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}