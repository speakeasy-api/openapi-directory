package openapisdk.models.operations;



public class GetFilePaymentsFilePaymentIdPaymentDetailsResponse {
    public byte[] body;
    public GetFilePaymentsFilePaymentIdPaymentDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilePaymentsFilePaymentIdPaymentDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFilePaymentsFilePaymentIdPaymentDetailsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetFilePaymentsFilePaymentIdPaymentDetailsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWritePaymentDetailsResponse1 obWritePaymentDetailsResponse1;
    public GetFilePaymentsFilePaymentIdPaymentDetailsResponse withObWritePaymentDetailsResponse1(openapisdk.models.shared.ObWritePaymentDetailsResponse1 obWritePaymentDetailsResponse1) {
        this.obWritePaymentDetailsResponse1 = obWritePaymentDetailsResponse1;
        return this;
    }
    public Long statusCode;
    public GetFilePaymentsFilePaymentIdPaymentDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}