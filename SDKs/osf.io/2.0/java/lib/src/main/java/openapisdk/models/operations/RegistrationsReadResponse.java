package openapisdk.models.operations;



public class RegistrationsReadResponse {
    public byte[] body;
    public RegistrationsReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RegistrationsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistrationsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}