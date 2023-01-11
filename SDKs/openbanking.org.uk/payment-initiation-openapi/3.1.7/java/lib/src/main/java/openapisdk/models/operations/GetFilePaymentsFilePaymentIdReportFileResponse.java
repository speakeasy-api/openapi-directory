package openapisdk.models.operations;



public class GetFilePaymentsFilePaymentIdReportFileResponse {
    public byte[] body;
    public GetFilePaymentsFilePaymentIdReportFileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilePaymentsFilePaymentIdReportFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> file;
    public GetFilePaymentsFilePaymentIdReportFileResponse withFile(java.util.Map<String, Object> file) {
        this.file = file;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFilePaymentsFilePaymentIdReportFileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetFilePaymentsFilePaymentIdReportFileResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public Long statusCode;
    public GetFilePaymentsFilePaymentIdReportFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}