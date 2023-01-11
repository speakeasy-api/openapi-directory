package openapisdk.models.operations;



public class GetInternationalPaymentsInternationalPaymentIdResponse {
    public byte[] body;
    public GetInternationalPaymentsInternationalPaymentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInternationalPaymentsInternationalPaymentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInternationalPaymentsInternationalPaymentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetInternationalPaymentsInternationalPaymentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalResponse5 obWriteInternationalResponse5;
    public GetInternationalPaymentsInternationalPaymentIdResponse withObWriteInternationalResponse5(openapisdk.models.shared.ObWriteInternationalResponse5 obWriteInternationalResponse5) {
        this.obWriteInternationalResponse5 = obWriteInternationalResponse5;
        return this;
    }
    public Long statusCode;
    public GetInternationalPaymentsInternationalPaymentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}