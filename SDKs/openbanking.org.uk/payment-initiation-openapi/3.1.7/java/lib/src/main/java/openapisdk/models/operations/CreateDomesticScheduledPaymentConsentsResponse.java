package openapisdk.models.operations;



public class CreateDomesticScheduledPaymentConsentsResponse {
    public byte[] body;
    public CreateDomesticScheduledPaymentConsentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateDomesticScheduledPaymentConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDomesticScheduledPaymentConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateDomesticScheduledPaymentConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticScheduledConsentResponse5 obWriteDomesticScheduledConsentResponse5;
    public CreateDomesticScheduledPaymentConsentsResponse withObWriteDomesticScheduledConsentResponse5(openapisdk.models.shared.ObWriteDomesticScheduledConsentResponse5 obWriteDomesticScheduledConsentResponse5) {
        this.obWriteDomesticScheduledConsentResponse5 = obWriteDomesticScheduledConsentResponse5;
        return this;
    }
    public Long statusCode;
    public CreateDomesticScheduledPaymentConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}