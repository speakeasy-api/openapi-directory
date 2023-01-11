package openapisdk.models.operations;



public class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse {
    public byte[] body;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWritePaymentDetailsResponse1 obWritePaymentDetailsResponse1;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse withObWritePaymentDetailsResponse1(openapisdk.models.shared.ObWritePaymentDetailsResponse1 obWritePaymentDetailsResponse1) {
        this.obWritePaymentDetailsResponse1 = obWritePaymentDetailsResponse1;
        return this;
    }
    public Long statusCode;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}