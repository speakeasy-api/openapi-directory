package openapisdk.models.operations;



public class PostCertificatesResponse {
    public String contentType;
    public PostCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PostCertificatesCreateCertificateResponse createCertificateResponse;
    public PostCertificatesResponse withCreateCertificateResponse(PostCertificatesCreateCertificateResponse createCertificateResponse) {
        this.createCertificateResponse = createCertificateResponse;
        return this;
    }
    public Long statusCode;
    public PostCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}