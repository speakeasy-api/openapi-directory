package openapisdk.models.operations;



public class CreateDomesticStandingOrderConsentsResponse {
    public byte[] body;
    public CreateDomesticStandingOrderConsentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateDomesticStandingOrderConsentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDomesticStandingOrderConsentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateDomesticStandingOrderConsentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticStandingOrderConsentResponse6 obWriteDomesticStandingOrderConsentResponse6;
    public CreateDomesticStandingOrderConsentsResponse withObWriteDomesticStandingOrderConsentResponse6(openapisdk.models.shared.ObWriteDomesticStandingOrderConsentResponse6 obWriteDomesticStandingOrderConsentResponse6) {
        this.obWriteDomesticStandingOrderConsentResponse6 = obWriteDomesticStandingOrderConsentResponse6;
        return this;
    }
    public Long statusCode;
    public CreateDomesticStandingOrderConsentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}