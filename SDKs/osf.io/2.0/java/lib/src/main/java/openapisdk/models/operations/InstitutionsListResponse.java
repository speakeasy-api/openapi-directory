package openapisdk.models.operations;



public class InstitutionsListResponse {
    public byte[] body;
    public InstitutionsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public InstitutionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InstitutionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}