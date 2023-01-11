package openapisdk.models.operations;



public class GetCertificatesIdResponse {
    public GetCertificatesIdCertificateResponse certificateResponse;
    public GetCertificatesIdResponse withCertificateResponse(GetCertificatesIdCertificateResponse certificateResponse) {
        this.certificateResponse = certificateResponse;
        return this;
    }
    public String contentType;
    public GetCertificatesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCertificatesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}