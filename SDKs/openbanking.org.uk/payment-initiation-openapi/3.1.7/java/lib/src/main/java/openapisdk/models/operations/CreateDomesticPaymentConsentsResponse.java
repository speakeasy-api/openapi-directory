package openapisdk.models.operations;



public class CreateDomesticPaymentConsentsResponse {
    public byte[] body;
    public CreateDomesticPaymentConsentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateDomesticPaymentConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDomesticPaymentConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateDomesticPaymentConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticConsentResponse5 obWriteDomesticConsentResponse5;
    public CreateDomesticPaymentConsentsResponse withObWriteDomesticConsentResponse5(openapisdk.models.shared.ObWriteDomesticConsentResponse5 obWriteDomesticConsentResponse5) {
        this.obWriteDomesticConsentResponse5 = obWriteDomesticConsentResponse5;
        return this;
    }
    public Long statusCode;
    public CreateDomesticPaymentConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}