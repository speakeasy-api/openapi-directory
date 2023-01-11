package openapisdk.models.operations;



public class GetFilePaymentConsentsConsentIdFileResponse {
    public byte[] body;
    public GetFilePaymentConsentsConsentIdFileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilePaymentConsentsConsentIdFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> file;
    public GetFilePaymentConsentsConsentIdFileResponse withFile(java.util.Map<String, Object> file) {
        this.file = file;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFilePaymentConsentsConsentIdFileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetFilePaymentConsentsConsentIdFileResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public Long statusCode;
    public GetFilePaymentConsentsConsentIdFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}