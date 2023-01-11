package openapisdk.models.operations;



public class InstitutionsDetailResponse {
    public byte[] body;
    public InstitutionsDetailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public InstitutionsDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InstitutionsDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}