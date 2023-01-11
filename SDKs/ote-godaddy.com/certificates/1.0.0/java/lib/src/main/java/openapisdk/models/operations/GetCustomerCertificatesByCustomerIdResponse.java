package openapisdk.models.operations;



public class GetCustomerCertificatesByCustomerIdResponse {
    public byte[] body;
    public GetCustomerCertificatesByCustomerIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public Object certificateSummariesV2;
    public GetCustomerCertificatesByCustomerIdResponse withCertificateSummariesV2(Object certificateSummariesV2) {
        this.certificateSummariesV2 = certificateSummariesV2;
        return this;
    }
    public String contentType;
    public GetCustomerCertificatesByCustomerIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCustomerCertificatesByCustomerIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}