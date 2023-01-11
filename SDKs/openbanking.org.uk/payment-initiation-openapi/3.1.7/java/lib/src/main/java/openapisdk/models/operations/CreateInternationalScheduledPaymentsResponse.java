package openapisdk.models.operations;



public class CreateInternationalScheduledPaymentsResponse {
    public byte[] body;
    public CreateInternationalScheduledPaymentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateInternationalScheduledPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateInternationalScheduledPaymentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateInternationalScheduledPaymentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteInternationalScheduledResponse6 obWriteInternationalScheduledResponse6;
    public CreateInternationalScheduledPaymentsResponse withObWriteInternationalScheduledResponse6(openapisdk.models.shared.ObWriteInternationalScheduledResponse6 obWriteInternationalScheduledResponse6) {
        this.obWriteInternationalScheduledResponse6 = obWriteInternationalScheduledResponse6;
        return this;
    }
    public Long statusCode;
    public CreateInternationalScheduledPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}