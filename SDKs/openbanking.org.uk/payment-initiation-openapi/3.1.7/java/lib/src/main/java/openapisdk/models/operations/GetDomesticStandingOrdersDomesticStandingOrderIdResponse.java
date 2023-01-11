package openapisdk.models.operations;



public class GetDomesticStandingOrdersDomesticStandingOrderIdResponse {
    public byte[] body;
    public GetDomesticStandingOrdersDomesticStandingOrderIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomesticStandingOrdersDomesticStandingOrderIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomesticStandingOrdersDomesticStandingOrderIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetDomesticStandingOrdersDomesticStandingOrderIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteDomesticStandingOrderResponse6 obWriteDomesticStandingOrderResponse6;
    public GetDomesticStandingOrdersDomesticStandingOrderIdResponse withObWriteDomesticStandingOrderResponse6(openapisdk.models.shared.ObWriteDomesticStandingOrderResponse6 obWriteDomesticStandingOrderResponse6) {
        this.obWriteDomesticStandingOrderResponse6 = obWriteDomesticStandingOrderResponse6;
        return this;
    }
    public Long statusCode;
    public GetDomesticStandingOrdersDomesticStandingOrderIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}