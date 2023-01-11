package openapisdk.models.operations;



public class RegistrationsFilesReadResponse {
    public byte[] body;
    public RegistrationsFilesReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RegistrationsFilesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistrationsFilesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}