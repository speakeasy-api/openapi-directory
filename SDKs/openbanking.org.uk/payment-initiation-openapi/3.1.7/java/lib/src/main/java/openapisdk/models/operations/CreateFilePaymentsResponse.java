package openapisdk.models.operations;



public class CreateFilePaymentsResponse {
    public byte[] body;
    public CreateFilePaymentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateFilePaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateFilePaymentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public CreateFilePaymentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObWriteFileResponse3 obWriteFileResponse3;
    public CreateFilePaymentsResponse withObWriteFileResponse3(openapisdk.models.shared.ObWriteFileResponse3 obWriteFileResponse3) {
        this.obWriteFileResponse3 = obWriteFileResponse3;
        return this;
    }
    public Long statusCode;
    public CreateFilePaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}