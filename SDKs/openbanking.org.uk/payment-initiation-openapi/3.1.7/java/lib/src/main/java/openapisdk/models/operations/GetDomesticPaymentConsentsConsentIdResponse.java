package openapisdk.models.operations;



public class GetDomesticPaymentConsentsConsentIdResponse {
    public byte[] body;
    public GetDomesticPaymentConsentsConsentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomesticPaymentConsentsConsentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomesticPaymentConsentsConsentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetDomesticPaymentConsentsConsentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticConsentResponse5 obWriteDomesticConsentResponse5;
    public GetDomesticPaymentConsentsConsentIdResponse withObWriteDomesticConsentResponse5(openapisdk.models.shared.ObWriteDomesticConsentResponse5 obWriteDomesticConsentResponse5) {
        this.obWriteDomesticConsentResponse5 = obWriteDomesticConsentResponse5;
        return this;
    }
    public Long statusCode;
    public GetDomesticPaymentConsentsConsentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}