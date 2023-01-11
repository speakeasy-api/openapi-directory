package openapisdk.models.operations;



public class GetFilePaymentsFilePaymentIdResponse {
    public byte[] body;
    public GetFilePaymentsFilePaymentIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilePaymentsFilePaymentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFilePaymentsFilePaymentIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetFilePaymentsFilePaymentIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteFileResponse3 obWriteFileResponse3;
    public GetFilePaymentsFilePaymentIdResponse withObWriteFileResponse3(openapisdk.models.shared.ObWriteFileResponse3 obWriteFileResponse3) {
        this.obWriteFileResponse3 = obWriteFileResponse3;
        return this;
    }
    public Long statusCode;
    public GetFilePaymentsFilePaymentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}