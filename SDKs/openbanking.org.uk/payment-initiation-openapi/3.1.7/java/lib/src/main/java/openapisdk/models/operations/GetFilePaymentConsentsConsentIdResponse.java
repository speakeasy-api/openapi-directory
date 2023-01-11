package openapisdk.models.operations;



public class GetFilePaymentConsentsConsentIdResponse {
    public byte[] body;
    public GetFilePaymentConsentsConsentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilePaymentConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFilePaymentConsentsConsentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetFilePaymentConsentsConsentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteFileConsentResponse4 obWriteFileConsentResponse4;
    public GetFilePaymentConsentsConsentIdResponse withObWriteFileConsentResponse4(openapisdk.models.shared.ObWriteFileConsentResponse4 obWriteFileConsentResponse4) {
        this.obWriteFileConsentResponse4 = obWriteFileConsentResponse4;
        return this;
    }
    public Long statusCode;
    public GetFilePaymentConsentsConsentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}