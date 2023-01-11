package openapisdk.models.operations;



public class CreateInternationalScheduledPaymentConsentsResponse {
    public byte[] body;
    public CreateInternationalScheduledPaymentConsentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateInternationalScheduledPaymentConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateInternationalScheduledPaymentConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateInternationalScheduledPaymentConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalScheduledConsentResponse6 obWriteInternationalScheduledConsentResponse6;
    public CreateInternationalScheduledPaymentConsentsResponse withObWriteInternationalScheduledConsentResponse6(openapisdk.models.shared.ObWriteInternationalScheduledConsentResponse6 obWriteInternationalScheduledConsentResponse6) {
        this.obWriteInternationalScheduledConsentResponse6 = obWriteInternationalScheduledConsentResponse6;
        return this;
    }
    public Long statusCode;
    public CreateInternationalScheduledPaymentConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}