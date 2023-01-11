package openapisdk.models.operations;



public class GetDomesticPaymentsDomesticPaymentIdResponse {
    public byte[] body;
    public GetDomesticPaymentsDomesticPaymentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomesticPaymentsDomesticPaymentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomesticPaymentsDomesticPaymentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetDomesticPaymentsDomesticPaymentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticResponse5 obWriteDomesticResponse5;
    public GetDomesticPaymentsDomesticPaymentIdResponse withObWriteDomesticResponse5(openapisdk.models.shared.ObWriteDomesticResponse5 obWriteDomesticResponse5) {
        this.obWriteDomesticResponse5 = obWriteDomesticResponse5;
        return this;
    }
    public Long statusCode;
    public GetDomesticPaymentsDomesticPaymentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}