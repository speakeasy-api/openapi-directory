package openapisdk.models.operations;



public class CreateInternationalPaymentsResponse {
    public byte[] body;
    public CreateInternationalPaymentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateInternationalPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateInternationalPaymentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateInternationalPaymentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalResponse5 obWriteInternationalResponse5;
    public CreateInternationalPaymentsResponse withObWriteInternationalResponse5(openapisdk.models.shared.ObWriteInternationalResponse5 obWriteInternationalResponse5) {
        this.obWriteInternationalResponse5 = obWriteInternationalResponse5;
        return this;
    }
    public Long statusCode;
    public CreateInternationalPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}