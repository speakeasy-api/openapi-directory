package openapisdk.models.operations;



public class GetInternationalScheduledPaymentConsentsConsentIdResponse {
    public byte[] body;
    public GetInternationalScheduledPaymentConsentsConsentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInternationalScheduledPaymentConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInternationalScheduledPaymentConsentsConsentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetInternationalScheduledPaymentConsentsConsentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalScheduledConsentResponse6 obWriteInternationalScheduledConsentResponse6;
    public GetInternationalScheduledPaymentConsentsConsentIdResponse withObWriteInternationalScheduledConsentResponse6(openapisdk.models.shared.ObWriteInternationalScheduledConsentResponse6 obWriteInternationalScheduledConsentResponse6) {
        this.obWriteInternationalScheduledConsentResponse6 = obWriteInternationalScheduledConsentResponse6;
        return this;
    }
    public Long statusCode;
    public GetInternationalScheduledPaymentConsentsConsentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}