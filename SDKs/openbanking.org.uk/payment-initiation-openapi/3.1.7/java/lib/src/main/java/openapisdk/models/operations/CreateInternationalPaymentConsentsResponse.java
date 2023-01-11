package openapisdk.models.operations;



public class CreateInternationalPaymentConsentsResponse {
    public byte[] body;
    public CreateInternationalPaymentConsentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateInternationalPaymentConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateInternationalPaymentConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateInternationalPaymentConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalConsentResponse6 obWriteInternationalConsentResponse6;
    public CreateInternationalPaymentConsentsResponse withObWriteInternationalConsentResponse6(openapisdk.models.shared.ObWriteInternationalConsentResponse6 obWriteInternationalConsentResponse6) {
        this.obWriteInternationalConsentResponse6 = obWriteInternationalConsentResponse6;
        return this;
    }
    public Long statusCode;
    public CreateInternationalPaymentConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}