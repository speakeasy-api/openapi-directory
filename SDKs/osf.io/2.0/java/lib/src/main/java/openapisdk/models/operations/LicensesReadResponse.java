package openapisdk.models.operations;



public class LicensesReadResponse {
    public byte[] body;
    public LicensesReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LicensesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicensesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}