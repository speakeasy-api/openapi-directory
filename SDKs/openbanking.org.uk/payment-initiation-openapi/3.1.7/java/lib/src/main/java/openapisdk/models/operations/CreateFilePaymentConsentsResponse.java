package openapisdk.models.operations;



public class CreateFilePaymentConsentsResponse {
    public byte[] body;
    public CreateFilePaymentConsentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateFilePaymentConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateFilePaymentConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateFilePaymentConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteFileConsentResponse4 obWriteFileConsentResponse4;
    public CreateFilePaymentConsentsResponse withObWriteFileConsentResponse4(openapisdk.models.shared.ObWriteFileConsentResponse4 obWriteFileConsentResponse4) {
        this.obWriteFileConsentResponse4 = obWriteFileConsentResponse4;
        return this;
    }
    public Long statusCode;
    public CreateFilePaymentConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}