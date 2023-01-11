package openapisdk.models.operations;



public class LicenseListResponse {
    public byte[] body;
    public LicenseListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LicenseListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicenseListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}