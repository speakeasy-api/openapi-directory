package openapisdk.models.operations;



public class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse {
    public byte[] body;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalStandingOrderResponse7 obWriteInternationalStandingOrderResponse7;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse withObWriteInternationalStandingOrderResponse7(openapisdk.models.shared.ObWriteInternationalStandingOrderResponse7 obWriteInternationalStandingOrderResponse7) {
        this.obWriteInternationalStandingOrderResponse7 = obWriteInternationalStandingOrderResponse7;
        return this;
    }
    public Long statusCode;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}