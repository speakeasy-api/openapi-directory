package openapisdk.models.operations;



public class GetCertificateDetailByCertIdentifierResponse {
    public byte[] body;
    public GetCertificateDetailByCertIdentifierResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public Object certificateDetailV2;
    public GetCertificateDetailByCertIdentifierResponse withCertificateDetailV2(Object certificateDetailV2) {
        this.certificateDetailV2 = certificateDetailV2;
        return this;
    }
    public String contentType;
    public GetCertificateDetailByCertIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCertificateDetailByCertIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}