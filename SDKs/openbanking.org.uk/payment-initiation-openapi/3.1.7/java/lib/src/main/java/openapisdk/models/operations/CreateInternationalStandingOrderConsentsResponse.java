package openapisdk.models.operations;



public class CreateInternationalStandingOrderConsentsResponse {
    public byte[] body;
    public CreateInternationalStandingOrderConsentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateInternationalStandingOrderConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateInternationalStandingOrderConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateInternationalStandingOrderConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalStandingOrderConsentResponse7 obWriteInternationalStandingOrderConsentResponse7;
    public CreateInternationalStandingOrderConsentsResponse withObWriteInternationalStandingOrderConsentResponse7(openapisdk.models.shared.ObWriteInternationalStandingOrderConsentResponse7 obWriteInternationalStandingOrderConsentResponse7) {
        this.obWriteInternationalStandingOrderConsentResponse7 = obWriteInternationalStandingOrderConsentResponse7;
        return this;
    }
    public Long statusCode;
    public CreateInternationalStandingOrderConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}