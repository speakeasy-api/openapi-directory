package openapisdk.models.operations;



public class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse {
    public byte[] body;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticScheduledResponse5 obWriteDomesticScheduledResponse5;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse withObWriteDomesticScheduledResponse5(openapisdk.models.shared.ObWriteDomesticScheduledResponse5 obWriteDomesticScheduledResponse5) {
        this.obWriteDomesticScheduledResponse5 = obWriteDomesticScheduledResponse5;
        return this;
    }
    public Long statusCode;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}