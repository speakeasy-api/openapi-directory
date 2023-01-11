package openapisdk.models.operations;



public class RegistrationsListResponse {
    public byte[] body;
    public RegistrationsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RegistrationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistrationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}