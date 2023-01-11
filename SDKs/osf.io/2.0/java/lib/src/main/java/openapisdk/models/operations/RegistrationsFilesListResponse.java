package openapisdk.models.operations;



public class RegistrationsFilesListResponse {
    public byte[] body;
    public RegistrationsFilesListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RegistrationsFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistrationsFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}