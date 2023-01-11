package openapisdk.models.operations;



public class GetDomesticStandingOrderConsentsConsentIdResponse {
    public byte[] body;
    public GetDomesticStandingOrderConsentsConsentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomesticStandingOrderConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomesticStandingOrderConsentsConsentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetDomesticStandingOrderConsentsConsentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticStandingOrderConsentResponse6 obWriteDomesticStandingOrderConsentResponse6;
    public GetDomesticStandingOrderConsentsConsentIdResponse withObWriteDomesticStandingOrderConsentResponse6(openapisdk.models.shared.ObWriteDomesticStandingOrderConsentResponse6 obWriteDomesticStandingOrderConsentResponse6) {
        this.obWriteDomesticStandingOrderConsentResponse6 = obWriteDomesticStandingOrderConsentResponse6;
        return this;
    }
    public Long statusCode;
    public GetDomesticStandingOrderConsentsConsentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}